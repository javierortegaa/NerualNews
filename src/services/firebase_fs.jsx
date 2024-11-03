import {
  collection,
  getDoc,
  doc,
  setDoc,
  getDocs,
  query,
  limit,
  startAfter,
  where,
  orderBy,
} from "firebase/firestore";
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

export const getArticles = async (page = 1, tag = "") => {
  const articles = [];
  const articlesRef = collection(fs, "articles");
  const articlesPerPage = 8;

  // Create a query with filters: sorted by date (descending) and summarized = true
  let q = query(
    articlesRef,
    where("summarized", "==", true),
    orderBy("date", "desc"),
    limit(articlesPerPage)
  );
  if (tag !== "") {
    q = query(
      articlesRef,
      where("tags", "array-contains", tag),
      where("summarized", "==", true),
      orderBy("date", "desc"),
      limit(articlesPerPage)
    );
  }
  // Adjust the query for pagination
  if (page > 1) {
    let lastDocSnapshot;
    if (tag === "") {
      lastDocSnapshot = await getDocs(
        query(
          articlesRef,
          where("summarized", "==", true),
          orderBy("date", "desc"),
          limit((page - 1) * articlesPerPage)
        )
      );
    } else {
      lastDocSnapshot = await getDocs(
        query(
          articlesRef,
          where("tags", "array-contains", tag),
          where("summarized", "==", true),
          orderBy("date", "desc"),
          limit((page - 1) * articlesPerPage)
        )
      );
    }
    const lastDoc = lastDocSnapshot.docs[lastDocSnapshot.docs.length - 1];
    if (lastDoc) {
      q = query(q, startAfter(lastDoc));
    }
  }

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    articles.push({ id: doc.id, ...doc.data() });
  });

  return articles;
};
