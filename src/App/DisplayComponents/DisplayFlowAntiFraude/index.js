import React, { useState, useMemo } from "react";
import FlowManager from "@bit/vitorbarbosa19.ziro.flow-manager";
import Summary from "../../../components/FlowSummary";
import ChooseCard from "../../../components/FlowChooseCard";
import ChooseInstallments from "../../../components/FlowChooseInstallments";
import RegisterCard from "../../../components/FlowRegisterCard";
import UploadPhoto from "@bit/vitorbarbosa19.ziro.flow-upload-photo";
import Header from "../../../components/Header";
import { Route, Switch, useLocation } from "wouter";

export const DisplayFlowAntiFraude = () => {
    const [_, setLocation] = useLocation();

    const [cardNumber, setCardNumber] = useState();

    const header = useMemo(() => <Header title="Titulo" type="title-only" />, []);

    return (
        <FlowManager>
            <div style={{ padding: "20px" }}>
                <Switch>
                    <Route path="/anti-fraude/summary">
                        <Summary
                            seller="Crisfael"
                            charge="60072"
                            maxInstallments="6"
                            nextLocation="/anti-fraude/choose-card"
                            misc={{
                                title: "Sobre a loja",
                                text: "A Crisfael é uma loja parceira da Ziro.",
                            }}
                        />
                    </Route>
                    <Route path="/anti-fraude/choose-card">
                        <ChooseCard
                            cards={[
                                {
                                    number: "5403 **** **** ****",
                                    status: "peddingApproval",
                                },
                            ]}
                            next={{
                                onClick: ({ number }) => {
                                    return new Promise((res, rej) => {
                                        if (number) {
                                            setCardNumber(number);
                                            res();
                                        } else rej("NO_CARD");
                                    });
                                },
                                location: "/anti-fraude/choose-installments",
                            }}
                            previous={{ location: "/anti-fraude/summary" }}
                            newCard={{ location: "/anti-fraude/register-card" }}
                        />
                    </Route>
                    <Route path="/anti-fraude/choose-installments">
                        <ChooseInstallments
                            seller="Crisfael"
                            charge="60072"
                            maxInstallments="6"
                            cardNumber={cardNumber}
                            previous={{ location: "anti-fraude/choose-card" }}
                            next={{
                                onClick: ({ installments }) => {
                                    return new Promise((res, rej) => {
                                        if (installments) {
                                            console.log("sending to backend");
                                        } else rej("NO_INSTALLMENTS");
                                    });
                                },
                            }}
                        />
                    </Route>
                    <Route path="/anti-fraude/register-card">
                        <RegisterCard
                            header={header}
                            // showInstallments
                            // installmentsMax="3"
                            // seller="Ziro"
                            // charge="10000"
                            next={{
                                onClick: (state) => {
                                    console.log({ state });
                                    return new Promise((res, rej) => {
                                        setTimeout(res, 1000);
                                    });
                                },
                            }}
                        />
                    </Route>
                    <Route path="/anti-fraude/document-photo">
                        <UploadPhoto
                            next={{
                                onClick: ({ picture }) => {
                                    console.log({ picture });
                                    return new Promise((res, rej) => {
                                        if (!picture) rej("NO_PHOTO");
                                        setTimeout(res, 1000);
                                    });
                                },
                                location: "anti-fraude/selfie",
                            }}
                            previous={{ location: "anti-fraude/register-card" }}
                            title="Foto do documento"
                            modal={{
                                illustration: "cnhPhoto",
                                title: "Documento",
                                message: "Para registrar um novo cartão é necessário enviar uma foto do documento do portador",
                            }}
                        />
                    </Route>
                    <Route path="/anti-fraude/selfie">
                        <UploadPhoto
                            next={{
                                onClick: ({ picture }) => {
                                    console.log({ picture });
                                    return new Promise((res, rej) => {
                                        if (!picture) rej("NO_PHOTO");
                                        setTimeout(res, 1000);
                                    });
                                },
                            }}
                            previous={{ location: "anti-fraude/document-photo" }}
                            title="Selfie"
                            modal={{
                                illustration: "selfieOne",
                                title: "Selfie",
                                message: "Para registrar um novo cartão é necessário enviar uma selfie do portador",
                            }}
                        />
                    </Route>
                </Switch>
            </div>
        </FlowManager>
    );
};
