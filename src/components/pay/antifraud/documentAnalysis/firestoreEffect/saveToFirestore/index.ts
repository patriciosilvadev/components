import { FirebaseCardDocument, FirebaseCard } from "@bit/vitorbarbosa19.ziro.firebase.catalog-user-data";
import { UseFullOCR } from "../../main";
import { createFirebaseData } from "./createData";

export async function saveSuccessToFirestore(
    firebaseCard: FirebaseCardDocument,
    result: UseFullOCR.ClassResult,
    FV: typeof import("firebase").firestore.FieldValue,
) {
    const resultData = UseFullOCR.transformResult(result);
    const oldData = firebaseCard.data();
    if (oldData.status !== "pendingDocument") throw "WRONG_STATUS";
    const newData = {
        ...createFirebaseData(oldData, resultData),
        added: oldData.added,
        updated: FV.serverTimestamp(),
    };
    if (oldData.errors) newData.errors = oldData.errors;
    await firebaseCard.ref.set(newData as any);
}

export async function saveFailureToFirestore(
    firebaseCard: FirebaseCardDocument,
    error: UseFullOCR.Errors.Generic,
    FV: typeof import("firebase").firestore.FieldValue,
) {
    const errorData: FirebaseCard.Generic["errors"][0] = {
        Timestamp: FV.serverTimestamp() as any,
        error: error.getData(),
    };
    await firebaseCard.ref.set(newData as any);
}
