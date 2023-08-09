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
            // feedback.category?.charAt(0).toUpperCase() +
            // feedback.category?.slice(1),
            feedback.category,
          description: feedback.description,
          id: feedback.id,
          status: feedback.status,
          title: feedback.title,
          upvotes: feedback.upvotes,
          comments: feedback.comments,
        };
        if (productFeedback) {
          acc.push(productFeedback);
        }
        return acc;
      }, []);
      //   console.log(feedbacksArr);
      if (feedbacksArr) {
        setFeedbacks(feedbacksArr);
      }
    };
    getFeedbacksMap();
  }, []);
  //TODO:
  //NOT TO CALL ALL FEEDBACKS WHEN PRESS CATEGORY BUTTON
  console.log(feedbacks);

  //sorted feedbacks by category property
  let filteredFeedbacks: any[] = [...feedbacks].filter(
    (item) => item.status === "suggestion"
  );

  switch (category) {
    case "All":
      filteredFeedbacks = [...filteredFeedbacks];
      break;
    //TODO:
    //TO ADDFEEDBACK MAKE CATEGORY FIRST LETTER CAPITALIZE
    case "Bug":
      filteredFeedbacks = filteredFeedbacks.filter(
        (feedback) => feedback.category === "bug"
      );
      break;
    case "Enhancement":
      filteredFeedbacks = filteredFeedbacks.filter(
        (feedback) => feedback.category === "enhancement"
      );
      break;
    case "Feature":
      filteredFeedbacks = filteredFeedbacks.filter(
        (feedback) => feedback.category === "feature"
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
      filteredFeedbacks = [...filteredFeedbacks];
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
