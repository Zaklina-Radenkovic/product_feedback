import {
  useContext,
  createContext,
  useState,
  useEffect,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { Feedback } from "@/types/models";

const SortedFeedbackContext = createContext<{
  sortedFeedbacks: Feedback[] | null;
  sort: string;
  setSort: Dispatch<SetStateAction<string>>;
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}>({
  sortedFeedbacks: [],
  sort: "",
  setSort: () => null,
  count: 0,
  setCount: () => null,
});
import { useFeedbackContext } from "./feedback";

export const SortedFeedbackProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [sort, setSort] = useState<string>("");
  const [count, setCount] = useState(0);
  const { filteredFeedbacks } = useFeedbackContext();

  const sortedFeedbacks = filteredFeedbacks
    .filter((item) => item.status === "suggestion")
    .sort((a, b) => {
      switch (sort) {
        case "mostUpvotes":
          return a.upvotes - b.upvotes;
        case "leastUpvotes":
          return b.upvotes - a.upvotes;
        case "mostComments":
          if (!a.comments) {
            return -1;
          }
          if (!b.comments) {
            return 1;
          }
          return a.comments.length - b.comments.length;
        case "leastComments":
          if (!a.comments) {
            return 1;
          }
          if (!b.comments) {
            return -1;
          }
          return b.comments.length - a.comments.length;
        default:
          return a.upvotes - b.upvotes;
      }
    });

  useEffect(() => {
    setCount(sortedFeedbacks.length);
  }, [sortedFeedbacks]);

  return (
    <SortedFeedbackContext.Provider
      value={{ sortedFeedbacks, sort, setSort, count, setCount }}
    >
      {children}
    </SortedFeedbackContext.Provider>
  );
};

export const useSortedFeedbackContext = () => useContext(SortedFeedbackContext);
