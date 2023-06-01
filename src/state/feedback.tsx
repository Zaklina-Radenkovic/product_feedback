import {
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  useContext,
  ReactNode,
} from "react";
import { getFeedbacksAndDocuments } from "@/lib/firebase";
import {
  DocumentData,
  QueryDocumentSnapshot,
  collection,
  getDocs,
} from "firebase/firestore";
import { Feedback } from "@/types/models";
import exp from "constants";
import { JsxChild } from "typescript";

export const FeedbackContext = createContext<{
  feedbacks: Feedback[] | null;
  setFeedbacks: Dispatch<SetStateAction<Feedback[]>>;
}>({
  feedbacks: [],
  setFeedbacks: () => null,
});

export const FeedbackProvider = ({ children }: { children: ReactNode }) => {
  const [feedbacks, setFeedbacks] = useState<Feedback[] | []>([]);

  useEffect(() => {
    const getFeedbacksMap = async () => {
      const data: DocumentData = await getFeedbacksAndDocuments("feedbacks");
      const feedbacksArr = data.reduce((acc: {}[], feedback: Feedback) => {
        const productFeedback = {
          ...feedback,
          category:
            feedback.category.charAt(0).toUpperCase() +
            feedback.category.slice(1),
          description: feedback.description,
          id: feedback.id,
          status: feedback.status,
          title: feedback.title,
          upvotes: feedback.upvotes,
          comments: feedback.comments,
        };
        acc.push(productFeedback);
        return acc;
      }, []);
      //   console.log(feedbacksArr);
      setFeedbacks(feedbacksArr);
    };
    getFeedbacksMap();
  }, []);
  return (
    <FeedbackContext.Provider value={{ feedbacks, setFeedbacks }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export const useFeedbackContext = useContext(FeedbackContext);

////---- ONE WAY OF GETTING DATA FROM FIREBASE, BUT THEN WE NEED TO MAKE APP ROUTER CLIENT SIDE WITH "use client" ---- ////////
// useEffect(() => {
//   const getFeedbacksMap = async () => {
//     const data: DocumentData = await getFeedbacksAndDocuments("feedbacks");
//     const feedbacksArr = data.reduce((acc: {}[], feedback: Feedback) => {
//       const productFeedback = {
//         ...feedback,
//         category:
//           feedback.category.charAt(0).toUpperCase() +
//           feedback.category.slice(1),
//         description: feedback.description,
//         id: feedback.id,
//         status: feedback.status,
//         title: feedback.title,
//         upvotes: feedback.upvotes,
//         comments: feedback.comments,
//       };
//       acc.push(productFeedback);
//       return acc;
//     }, []);
//     // console.log(feedbacksArr);
//     setproductFeedbacks(feedbacksArr);
//   };
//   getFeedbacksMap();
// }, []);


// useEffect(() => {
  //   addCollectionAndDocuments("feedbacks", PRODUCT_REQUESTS);
  // }, []);
