"use client";
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
import { Feedback } from "@/types/models";

const FeedbackContext = createContext<{
  feedbacks: Feedback[] | [];
  setFeedbacks: Dispatch<SetStateAction<Feedback[]>>;
  loading: boolean;
}>({
  feedbacks: [],
  setFeedbacks: (): Feedback[] => [],
  loading: false,
});

export const FeedbackProvider = ({ children }: { children: ReactNode }) => {
  const [feedbacks, setFeedbacks] = useState<Feedback[] | []>([]);
  const [loading, setLoading] = useState(false);

  //ONLY ONE TIME!
  // useEffect(() => {
  //   addCollectionAndDocuments("feedbacks", PRODUCT_REQUESTS);
  // }, []);

  useEffect(() => {
    const getFeedbacks = async () => {
      setLoading(true);
      const feedbacksData: Feedback[] = await getFeedbacksAndDocuments(
        "feedbacks"
      );

      if (feedbacksData) {
        setFeedbacks(feedbacksData);
      }
    };
    setLoading(false);
    getFeedbacks();
  }, []);

  //TODO:
  //NOT TO CALL ALL FEEDBACKS WHEN PRESS CATEGORY BUTTON
  // console.log(feedbacks);

  return (
    <FeedbackContext.Provider
      value={{
        loading,
        feedbacks,
        setFeedbacks,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export const useFeedbackContext = () => useContext(FeedbackContext);
