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
import { DocumentData } from "firebase/firestore";
import { Feedback } from "@/types/models";

const FeedbackContext = createContext<{
  feedbacks: Feedback[] | null;
  setFeedbacks: Dispatch<SetStateAction<Feedback[]>>;
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
  filteredFeedbacks: any[];
  plannedFeedbacks: any[];
  inProgressFeedbacks: any[];
  liveFeedbacks: any[];
  loading: boolean;
}>({
  feedbacks: [],
  setFeedbacks: (): Feedback[] => [],
  category: "",
  setCategory: (): string => "",
  filteredFeedbacks: [],
  plannedFeedbacks: [],
  inProgressFeedbacks: [],
  liveFeedbacks: [],
  loading: false,
});

export const FeedbackProvider = ({ children }: { children: ReactNode }) => {
  const [feedbacks, setFeedbacks] = useState<Feedback[] | []>([]);
  const [category, setCategory] = useState<string>("all");
  const [loading, setLoading] = useState(false);
  //ONLY ONE TIME!
  // useEffect(() => {
  //   addCollectionAndDocuments("feedbacks", PRODUCT_REQUESTS);
  // }, []);

  useEffect(() => {
    //STARI NACIN
    // const getFeedbacksMap = async () => {
    //   const data: DocumentData = await getFeedbacksAndDocuments("feedbacks");
    //   const feedbacksArr = data.reduce((acc: {}[], feedback: Feedback) => {
    //     const productFeedback = {
    //       ...feedback,
    //       category: feedback.category,
    //       description: feedback.description,
    //       id: feedback.id,
    //       status: feedback.status,
    //       title: feedback.title,
    //       upvotes: feedback.upvotes,
    //       comments: feedback.comments,
    //     };
    //     if (productFeedback) {
    //       acc.push(productFeedback);
    //     }
    //     return acc;
    //   }, []);

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

  useEffect(() => {
    setFeedbacks(feedbacks);
    // console.log("state ", feedbacks);
  }, [feedbacks]);
  //TODO:
  //NOT TO CALL ALL FEEDBACKS WHEN PRESS CATEGORY BUTTON
  // console.log(feedbacks);

  //sorted feedbacks by category property
  let filteredFeedbacks = [...feedbacks];

  switch (category) {
    case "All":
      filteredFeedbacks = [...feedbacks];
      break;
    case "Bug":
      filteredFeedbacks = feedbacks.filter(
        (feedback) => feedback.category === "bug"
      );
      break;
    case "Enhancement":
      filteredFeedbacks = feedbacks.filter(
        (feedback) => feedback.category === "enhancement"
      );
      break;
    case "Feature":
      filteredFeedbacks = feedbacks.filter(
        (feedback) => feedback.category === "feature"
      );
      break;
    case "UI":
      filteredFeedbacks = feedbacks.filter(
        (feedback) => feedback.category === "UI"
      );
      break;
    case "UX":
      filteredFeedbacks = feedbacks.filter(
        (feedback) => feedback.category === "UX"
      );
      break;
    default:
      filteredFeedbacks = [...feedbacks];
  }

  //sorted feedbacks by status property
  const plannedFeedbacks =
    feedbacks &&
    feedbacks
      .filter((item) => item.status === "planned")
      .map((item) => {
        return {
          ...item,
          status: item.status.replace(/(^\w|-\w)/g, (s: string) =>
            s.toUpperCase()
          ),
          color: "orange-planned",
        };
      });

  const inProgressFeedbacks =
    feedbacks &&
    feedbacks
      .filter((item) => item.status === "in-progress")
      .map((item) => {
        return {
          ...item,
          status: item.status.replace(/(^\w|-\w)/g, (s: string) =>
            s.toUpperCase()
          ),
          color: "blue-live",
        };
      });

  const liveFeedbacks =
    feedbacks &&
    feedbacks
      .filter((item) => item.status === "live")
      .map((item) => {
        return {
          ...item,
          status: item.status.replace(/(^\w|-\w)/g, (s: string) =>
            s.toUpperCase()
          ),
          color: "tertiary",
        };
      });

  return (
    <FeedbackContext.Provider
      value={{
        loading,
        feedbacks,
        setFeedbacks,
        category,
        setCategory,
        filteredFeedbacks,
        plannedFeedbacks,
        inProgressFeedbacks,
        liveFeedbacks,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export const useFeedbackContext = () => useContext(FeedbackContext);
