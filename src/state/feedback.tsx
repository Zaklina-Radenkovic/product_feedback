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
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}>({
  feedbacks: [],
  setFeedbacks: () => null,
  category: "",
  setCategory: () => null,
  filteredFeedbacks: [],
  count: 0,
  setCount: () => null,
});

export const FeedbackProvider = ({ children }: { children: ReactNode }) => {
  const [feedbacks, setFeedbacks] = useState<Feedback[] | []>([]);
  const [category, setCategory] = useState<string>("all");
  const [count, setCount] = useState(0);

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

  let filteredFeedbacks: any[] = [...feedbacks];

  switch (category) {
    case "all":
      filteredFeedbacks = [...feedbacks];
      // setCount(filteredFeedbacks.length);
      break;
    case "bug":
      filteredFeedbacks = filteredFeedbacks.filter(
        (feedback) => feedback.category === "Bug"
      );
      // setCount(filteredFeedbacks.length);
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

  useEffect(() => {
    setCount(filteredFeedbacks.length);
  }, [filteredFeedbacks]);

  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        setFeedbacks,
        category,
        setCategory,
        filteredFeedbacks,
        count,
        setCount,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export const useFeedbackContext = () => useContext(FeedbackContext);
