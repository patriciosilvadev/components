import { FirebaseCard } from "@bit/vitorbarbosa19.ziro.firebase.catalog-user-data";
import { is, FullOCR } from "@bit/vitorbarbosa19.ziro.pay.next-code";
import { UseFullOCR } from "../../../main";

export function Frente(
    _: Omit<FirebaseCard.Generic, "added" | "updated">,
    {
        response: { fileInfo, extracted, fieldScores, face, ...response },
        url,
        validations,
    }: UseFullOCR.DataResult<FullOCR.Response.CNHF>,
): Omit<FirebaseCard.CNHF, "added" | "updated"> {
    return {
        //common
        status: "pendingSelfie",
        //CNHF
        documentType: "cnh",
        extracted,
        face: face as FullOCR.Face.Success,
        ...(fieldScores ? { fieldScores } : {}),
        ...(is.BackgroundCheck(response) ? { found: response.found, passedOn: response.passedOn } : {}),
        "CNH F": { url, fileInfo },
        validations: {
            face: validations.face,
            name: validations.name,
            expirationDate: validations.expirationDate,
            CNHFProbability: validations.docProbability,
        },
    };
}

export function Verso(
    _: Omit<FirebaseCard.Generic, "added" | "updated">,
    { response: { fileInfo }, url, validations }: UseFullOCR.DataResult<FullOCR.Response.CNHV>,
): Omit<FirebaseCard.CNHV, "added" | "updated"> {
    return {
        //common
        status: "pendingDocument",
        //CNHV
        documentType: "cnh",
        docStatus: "pendingCNHF",
        "CNH V": { url, fileInfo },
        validations: {
            CNHVProbability: validations.docProbability,
        },
    };
}

export function FrenteVerso(
    _: Omit<FirebaseCard.Generic, "added" | "updated">,
    {
        response: { fileInfo, extracted, fieldScores, face, ...response },
        url,
        validations,
    }: UseFullOCR.DataResult<FullOCR.Response.CNHFV>,
): Omit<FirebaseCard.CNHFV, "added" | "updated"> {
    return {
        //common
        status: "pendingSelfie",
        //CNHFV
        documentType: "cnh",
        extracted,
        face: face as FullOCR.Face.Success,
        ...(fieldScores ? { fieldScores } : {}),
        ...(is.BackgroundCheck(response) ? { found: response.found, passedOn: response.passedOn } : {}),
        "CNH FV": { url, fileInfo },
        validations: {
            face: validations.face,
            name: validations.name,
            expirationDate: validations.expirationDate,
            CNHFVProbability: validations.docProbability,
        },
    };
}

export function FrenteMaisVerso(
    { ["CNH V"]: cnhv, validations: { CNHVProbability } }: Omit<FirebaseCard.CNHV, "added" | "updated">,
    {
        response: { fileInfo, extracted, fieldScores, face, ...response },
        url,
        validations,
    }: UseFullOCR.DataResult<FullOCR.Response.CNHF>,
): Omit<FirebaseCard.CNHFeV, "added" | "updated"> {
    return {
        //common
        status: "pendingSelfie",
        //CNHFV
        documentType: "cnh",
        extracted,
        face: face as FullOCR.Face.Success,
        ...(fieldScores ? { fieldScores } : {}),
        ...(is.BackgroundCheck(response) ? { found: response.found, passedOn: response.passedOn } : {}),
        "CNH V": cnhv,
        "CNH F": { url, fileInfo },
        validations: {
            face: validations.face,
            expirationDate: validations.expirationDate,
            name: validations.name,
            CNHVProbability,
            CNHFProbability: validations.docProbability,
        },
    };
}
