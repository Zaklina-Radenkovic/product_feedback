// Import the functions you need from the SDKs you need

import { iFeedbackToAdd } from "@/types/models";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  getDocs,
  deleteDoc,
  query,
  addDoc,
  collection,
  updateDoc,
  DocumentData,
  writeBatch,
} from "firebase/firestore";
import { useEffect } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyDEtBkoLCeYrhP6jY1iwvoqxp4wGuhRms8",
  authDomain: "product-feedback-66679.firebaseapp.com",
  projectId: "product-feedback-66679",
  storageBucket: "product-feedback-66679.appspot.com",
  messagingSenderId: "785861883724",
  appId: "1:785861883724:web:5b9a7bbf7ff1ce2e0541e9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();

//writing feedbacks onto firebase
export const addCollectionAndDocuments = async (
  collectionKey: string,
  objectsToAdd: DocumentData[]
) => {
  const batch = writeBatch(db);
  const collectionRef = collection(db, collectionKey);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.id);
    batch.set(docRef, object);
  });

  await batch.commit();
  // console.log("done");
};

//reading feedbacks
export const getFeedbacksAndDocuments = async (arg: any) => {
  //we want collectionRef of 'categories'
  const collectionRef = collection(db, "feedbacks");
  //we apply 'query' method on collectionRef which gives us object 'q'
  const q = query(collectionRef);

  //we get querysnapshot from getDocs on'q';
  const querySnapshot = await getDocs(q);

  //from 'querySnapshot.docs' we have an array of all our categories which we reduce over (we reduce over that arr) in order to structure we want (an arr of objects with 'items.title' and items) = in order to end up with an object

  // querySnapshot.docs.reduce(()=>{},{}) we need obj at the end
  const documentMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const data = docSnapshot.data();
    if (data) {
      //@ts-ignore
      acc.push(data);
    }
    return acc;
  }, []);
  // console.log(documentMap);
  return documentMap;
};

/// getting single document from collection by ID
export const getDocument = async (id) => {
  const documentRef = doc(db, "feedbacks", id);
  const docSnap = await getDoc(documentRef);
  if (docSnap.exists()) return docSnap.data();
};

///adding document to collection
export const addDocument = async (data: iFeedbackToAdd) => {
  const feedbacksCollectionRef = doc(collection(db, "feedbacks"));
  console.log(feedbacksCollectionRef.id);
  return await setDoc(feedbacksCollectionRef, {
    ...data,
    title: data.title.charAt(0).toUpperCase() + data.title.slice(1),
    category: data.category.charAt(0).toUpperCase() + data.category.slice(1),
    description:
      data.description.charAt(0).toUpperCase() + data.description.slice(1),
    upvotes: 0,
    status: "suggestion",
    comments: [],
    // replies: [],
    id: feedbacksCollectionRef.id,
  });
};

//updating document
export const updateFeedback = async (id, data = {}) => {
  const feedbacksCollectionRef = doc(db, "feedbacks", id);
  return await updateDoc(feedbacksCollectionRef, {
    id,
    ...data,
  });
};
