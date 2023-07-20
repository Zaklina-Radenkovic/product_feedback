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
}>({
  feedbacks: [],
  setFeedbacks: () => null,
  category: "",
  setCategory: () => null,
  filteredFeedbacks: [],
  plannedFeedbacks: [],
  inProgressFeedbacks: [],
  liveFeedbacks: [],
});

export const FeedbackProvider = ({ children }: { children: ReactNode }) => {
  const [feedbacks, setFeedbacks] = useState<Feedback[] | []>([]);
  const [category, setCategory] = useState<string>("all");

  // useEffect(() => {
  //   addCollectionAndDocuments("feedbacks", PRODUCT_REQUESTS);
  // }, []);

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

  //sorted feedbacks by category property
  let filteredFeedbacks: any[] = [...feedbacks];

  switch (category) {
    case "all":
      filteredFeedbacks = [...feedbacks];
      break;
    case "bug":
      filteredFeedbacks = filteredFeedbacks.filter(
        (feedback) => feedback.category === "Bug"
      );
      break;
    case "Enhancement":
      filteredFeedbacks = filteredFeedbacks.filter(
        (feedback) => feedback.category === "Enhancement"
      );
      break;
    case "feature":
      filteredFeedbacks = filteredFeedbacks.filter(
        (feedback) => feedback.category === "Feature"
      );
      break;
    case "UI":
      filteredFeedbacks = filteredFeedbacks.filter(
        (feedback) => feedback.category === "UI"
      );
      break;
    case "UX":
      filteredFeedbacks = filteredFeedbacks.filter(
        (feedback) => feedback.category === "UX"
      );
      break;
    default:
      filteredFeedbacks = [...feedbacks];
  }

  //sorted feedbacks by status property
  const plannedFeedbacks = filteredFeedbacks
    .filter((item) => item.status === "planned")

    .map((item) => {
      console.log(item.status);
      return {
        ...item,
        status: item.status.replace(/(^\w|-\w)/g, (s: string) =>
          s.toUpperCase()
        ),
        color: "orange-planned",
      };
    });
  console.log(plannedFeedbacks);
  const inProgressFeedbacks = filteredFeedbacks
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

  const liveFeedbacks = filteredFeedbacks
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
