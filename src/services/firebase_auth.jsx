import { auth } from "../configuration.tsx";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { addNewUser } from "./firebase_fs.tsx";

export const login = async (email: string, password: string) => {
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      return "Success";
    })
    .catch((error) => {
      const errorMessage = error.message;
      throw errorMessage;
    });
};

export const signup = async (
  email: string,
  password: string,
  username: string
) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      addNewUser(email, { username: username });
      return "Success";
    })
    .catch((error) => {
      const errorMessage = error.message;
      throw errorMessage;
    });
};

export const logout = async () => {
  return auth.signOut();
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        resolve(user);
      } else {
        resolve(null);
      }
      unsubscribe();
    });
  });
};
