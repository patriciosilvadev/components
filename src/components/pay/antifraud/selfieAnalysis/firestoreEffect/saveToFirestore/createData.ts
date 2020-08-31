import { FirebaseCard } from "@bit/vitorbarbosa19.ziro.firebase.catalog-user-data";
import { UseBiometry } from "../../main";

export function createFirebaseData(
    oldData: Omit<FirebaseCard.BeforeSelfiePhase, "added" | "updated">,
    { response, url, validations, status }: UseBiometry.DataResult,
    exclude: () => any,
): Omit<FirebaseCard.AfterAntifraud, "added" | "updated"> {
    return {
        ...oldData,
        status,
    } as any;
}
