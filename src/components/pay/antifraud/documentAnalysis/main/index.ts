import { FirebaseCardDocument } from "@bit/vitorbarbosa19.ziro.firebase.catalog-user-data";
import { fullOCR, common } from "ziro-messages/dist/src/catalogo/antifraude";
import { analiseDocument, is } from "@bit/vitorbarbosa19.ziro.pay.next-code";
import { ZoopCard } from "@bit/vitorbarbosa19.ziro.pay.zoop";
import devCheck from "./devCheck";
import { validator, processResults } from "./validator";
import { UseFullOCR } from "./types";
import { CancelTokenSource } from "axios";

const isDev = process.env.NODE_ENV === "development";

export * from "./types";

type Button = {
    title: string,
    action: () => void
}

interface Args extends UseFullOCR.Argument {
    uploadPicture: (picture: string) => Promise<string>;
    source: CancelTokenSource;
    fbCard: FirebaseCardDocument;
    zoopCard: ZoopCard;
    genericButton: Button
}

export const fullOCRPromise = async ({ picture, uploadPicture, source, fbCard, zoopCard, genericButton }: Args) => {
    if (!picture) throw common.prompt.NO_IMAGE.withAdditionalData({ where: "useFullOCR" }).withGenericButton(genericButton);
    if (!zoopCard) throw common.prompt.MISSING_ZOOP_DATA.withAdditionalData({ where: "useFullOCR" }).withGenericButton(genericButton);
    const url = await uploadPicture(picture).catch((error) => {
        throw common.prompt.CANNOT_UPLOAD_PICTURE_TO_STORAGE.withAdditionalData({ error, where: "useFullOCR" }).withGenericButton(genericButton);
    });
    const response = await analiseDocument(url, source.token);
    if (isDev) devCheck(response);
    if (!response || !is.Response(response)) throw fullOCR.prompt.UNRECOGNIZED_RESPONSE.withAdditionalData({ response, url }).withGenericButton(genericButton);
    if (is.Response.Selfie(response)) throw fullOCR.prompt.SELFIE_TYPE.withAdditionalData({ response, url });
    if (is.Response.UnknownDocument(response)) throw fullOCR.prompt.UNKNOWN_DOCUMENT_TYPE.withAdditionalData({ response, url }).withGenericButton(genericButton);
    const validations = validator(fbCard.data(), zoopCard, response);
    processResults(response, url, validations);
    return { response, url, validations } as UseFullOCR.ClassResult;
};
