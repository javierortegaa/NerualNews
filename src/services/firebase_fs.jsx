import { collection, getDoc, doc, setDoc } from "firebase/firestore";
import { fs } from "../configuration";

export const addNewUser = async (email, data) => {
  const docRef = doc(fs, "users", email);
  await setDoc(docRef, data);
  return docRef.id;
};

export const getUserData = async (email) => {
  const docRef = await getDoc(doc(fs, "users", email));
  return docRef.data();
};
