import {collection, getDoc, doc, setDoc} from "firebase/firestore";
import {fs} from "../configuration.tsx";


export const addNewUser = async (email: string, data: any) => {
    const docRef = doc(fs, "users", email);
    await setDoc(docRef, data);
    return docRef.id;
}

export const getUserData = async (email: string) => {
    const docRef = await getDoc(doc(fs, "users", email));
    return docRef.data();
}