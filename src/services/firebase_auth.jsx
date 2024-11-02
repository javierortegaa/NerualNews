import { auth } from "../configuration";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { addNewUser } from "./firebase_fs";

export const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return "Success";
  } catch (error) {
    throw new Error(error.message);
  }
};

export const signup = async (email, password, username) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    await addNewUser(email, { username: username });
    return "Success";
  } catch (error) {
    throw new Error(error.message);
  }
};

export const logout = async () => {
  try {
    await auth.signOut();
    return "Success";
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      unsubscribe();
      if (user) {
        resolve(user);
      } else {
        reject(new Error("No user is signed in"));
      }
    });
  });
};
