import { useFirestore, useFirestoreCollection, useFirestoreDoc, useStorage } from "reactfire";
import cuid from "cuid";
import { useStoreowner } from "@bit/vitorbarbosa19.ziro.firebase.storeowners";
import { FirebaseCardsCollectionRef, FirebaseCardsCollection, FirebaseCardDocument, FirebaseCard } from "./hookTypes";
import { useState, useCallback, useEffect, useRef } from "react";

export * from "./hookTypes";

/**
 * Esse hook retorna uma CollectionReference que aponta para a collection "cards" do usuário do catalogo que estiver logado
 */
export const useFirebaseCardsCollectionRef = () => {
    const { storeownerId } = useStoreowner();
    return useFirestore()
        .collection("catalog-user-data")
        .doc(storeownerId)
        .collection("cards") as FirebaseCardsCollectionRef;
};

/**
 * Esse hook retorna a collection "cards" do usuário do catalogo que estiver logado
 * @param startWithValue valor inicial, se for fornecido o hook não irá dar throw na promise (modo suspense)
 */
export const useFirebaseCardsCollection = <T = FirebaseCardsCollection>(startWithValue?: T) => {
    return (useFirestoreCollection(useFirebaseCardsCollectionRef(), {
        startWithValue: startWithValue as any,
    }) as unknown) as FirebaseCardsCollection | T;
};

/**
 * Esse hook retorna uma DocumentReference que aponta para o cartão com o id fornecido
 * @param cardId O id do cartão
 */
export const useFirebaseCardDocumentRef = (cardId: string) => {
    if (!cardId) throw new Error("useFirebaseCardRef was called with no cardId");
    return useFirebaseCardsCollectionRef().doc(cardId);
};

/**
 * Esse hook retorna o documento do cartão com o id fornecido
 * @param cardId O id do cartão
 * @param startWithValue valor inicial, se for fornecido o hook não irá dar throw na promise (modo suspense)
 */
export const useFirebaseCardDocument = <T = FirebaseCardDocument>(cardId: string, startWithValue?: T) => {
    if (!cardId) throw new Error("useFirebaseCard was called with no cardId");
    return (useFirestoreDoc(useFirebaseCardDocumentRef(cardId), { startWithValue }) as unknown) as
        | FirebaseCardDocument
        | T;
};

/**
 * Esse hook retorna um callback para upload de uma imagem em base64, assim como a task referente ao upload
 * @param cardId O id do cartão ao qual a imagem será vinculada
 */
export const useUploadFirebaseCardPicture = (cardId: string) => {
    if (!cardId) throw new Error("useUploadFirebaseCardPicture was called with no cardId");

    const pic = useRef<string>(null);
    const ref = useRef<import("firebase").storage.Reference>(null);
    const url = useRef<string>(null);

    const [task, setTask] = useState<import("firebase").storage.UploadTask>(null);

    const storage = useStorage();

    useEffect(() => () => task && task.cancel(), [task]);

    const upload = useCallback(
        async (picture: string) => {
            if (picture === pic.current) return url.current;
            pic.current = picture;
            const newRef = storage.ref(`antifraude/${cardId}`).child(cuid());
            ref.current = newRef;
            const uploadTask = newRef.putString(picture, "data_url");
            setTask(uploadTask);
            const taskCompleted = await uploadTask;
            const newUrl = await taskCompleted.ref.getDownloadURL();
            url.current = newUrl;
            return newUrl as string;
        },
        [pic, task, setTask, ref, storage, cardId, url],
    );

    return [upload, task] as [typeof upload, typeof task];
};
