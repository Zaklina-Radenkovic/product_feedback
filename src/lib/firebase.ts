import { iFeedbackToAdd } from '@/types/models';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  getDocs,
  deleteDoc,
  query,
  collection,
  updateDoc,
  DocumentData,
  writeBatch,
  arrayUnion,
  arrayRemove,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDEtBkoLCeYrhP6jY1iwvoqxp4wGuhRms8',
  authDomain: 'product-feedback-66679.firebaseapp.com',
  projectId: 'product-feedback-66679',
  storageBucket: 'product-feedback-66679.appspot.com',
  messagingSenderId: '785861883724',
  appId: '1:785861883724:web:5b9a7bbf7ff1ce2e0541e9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();

//writing feedbacks onto firebase
export const addCollectionAndDocuments = async (
  collectionKey: string,
  objectsToAdd: DocumentData[],
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
export const getFeedbacksAndDocuments = async (nameOfCollection: string) => {
  const collectionRef = collection(db, 'feedbacks');
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
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
export const getDocument = async (id: string) => {
  const documentRef = doc(db, 'feedbacks', id);
  const docSnap = await getDoc(documentRef);
  if (docSnap.exists()) return docSnap.data();
};

///adding document to collection
export const addDocument = async (id: string, data: iFeedbackToAdd) => {
  const documentRef = doc(db, 'feedbacks', id);
  return await setDoc(documentRef, {
    ...data,
  });
};

//updating document
export const updateFeedback = async (id: string, data = {}) => {
  const documentRef = doc(db, 'feedbacks', id);
  return await updateDoc(documentRef, {
    id,
    ...data,
  });
};

///delete document
export const deleteFeedback = async (id: string) => {
  const documentRef = doc(db, 'feedbacks', id);
  return await deleteDoc(documentRef);
};

////update comments array
export const updateComments = async (id: string, newComment: {}) => {
  const documentRef = doc(db, 'feedbacks', id);
  return await updateDoc(documentRef, {
    comments: arrayUnion(newComment),
  });
};

///Remove item from array
export const removeItem = async (id: string, comment: {}) => {
  const documentRef = doc(db, 'feedbacks', id);
  return await updateDoc(documentRef, {
    comments: arrayRemove(comment),
  });
};
