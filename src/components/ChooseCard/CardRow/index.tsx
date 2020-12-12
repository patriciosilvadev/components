import React, { Suspense, useMemo, useCallback } from "react";
import { useRecoilValue } from "recoil";
import Placeholder from "react-loading-skeleton";
//@ts-ignore
import Icon from "@bit/vitorbarbosa19.ziro.icon";
import { container, cardNumber, status, button, visible, invisible, initialVisible, initialInvisible } from "./style";
import { SkeletonProps, CardRowProps } from "./props";
import { BrandIcon } from "./BrandIcon";
import { motion } from "framer-motion";

const portugueseStatus = {
    pendingDocument: "Aguardando antifraude",
    pendingSelfie: "Aguardando antifraude",
    pendingManualApproval: "Aguardando revisão",
};

const Skeleton: React.FC<SkeletonProps> = ({ shouldShowStatus = false, rightButton, zoopCard, firebaseCardData }) => (
    <div style={container(!!rightButton)}>
        <BrandIcon brand={zoopCard?.card_brand.toLowerCase()} />
        <div style={{ display: "grid", alignItems: "center", width: "80%" }}>
            {zoopCard ? (
                <label style={cardNumber}>
                    {zoopCard.first4_digits} **** {zoopCard.last4_digits}
                </label>
            ) : (
                <Placeholder width="100%" height={20} />
            )}
            {zoopCard && shouldShowStatus && <label style={status}>{portugueseStatus[firebaseCardData?.status] || ""}</label>}
        </div>
        {rightButton && (
            <div style={button} onClick={rightButton.onClick}>
                <Icon type={rightButton.icon} size={20} color={rightButton.color} />
            </div>
        )}
    </div>
);

Skeleton.displayName = "CardRowSkeleton";

const StatefulCardRow: React.FC<CardRowProps> = ({ zoopAtom, firebaseCard, onClick, selected = false, rightButton, shouldShowStatus }) => {
    const zoopCard = useRecoilValue(zoopAtom(firebaseCard.id));
    const firebaseCardData = useMemo(() => firebaseCard.data(), [firebaseCard]);
    const animate = useMemo(() => (selected === firebaseCard.id ? invisible : visible), [selected]);
    const initial = useMemo(() => (selected === firebaseCard.id ? initialInvisible : initialVisible), [selected]);
    const _onClick = useCallback(() => onClick && onClick(firebaseCard.id), [onClick, firebaseCard]);
    const whileTap = useMemo(() => ({ scale: !onClick ? 1 : 0.95 }), [onClick]);
    const _rightButton = useMemo<SkeletonProps["rightButton"]>(
        () =>
            rightButton
                ? {
                      ...rightButton,
                      onClick: (event) => {
                          event.stopPropagation();
                          rightButton.onClick(firebaseCard.id);
                      },
                  }
                : undefined,
        [rightButton, firebaseCard],
    );
    return (
        <motion.div initial={initial} animate={animate} onClick={_onClick} whileTap={whileTap}>
            <Skeleton zoopCard={zoopCard} firebaseCardData={firebaseCardData} rightButton={_rightButton} shouldShowStatus={shouldShowStatus} />
        </motion.div>
    );
};

StatefulCardRow.displayName = "StatefulCardRow";

export const CardRow = React.memo<CardRowProps>((props) => {
    const suspenseRightButton = useMemo<SkeletonProps["rightButton"]>(
        () =>
            props.rightButton
                ? {
                      ...props.rightButton,
                      onClick: () => {},
                  }
                : undefined,
        [props.rightButton],
    );
    return (
        <Suspense fallback={<Skeleton rightButton={suspenseRightButton} />}>
            <StatefulCardRow {...props} />
        </Suspense>
    );
});

CardRow.displayName = "CardRow";
