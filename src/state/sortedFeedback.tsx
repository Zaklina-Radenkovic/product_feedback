import {
  useContext,
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

const SortedFeedbackContext = createContext<{
  sortedFeedbacks: [] | null;
  sort: string;
  setSort: Dispatch<SetStateAction<string>>;
}>({ sortedFeedbacks: [], sort: "", setSort: () => null });
import { useFeedbackContext } from "./feedback";

export const SortedFeedbackProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [sort, setSort] = useState<string>("");
  const { filteredFeedbacks } = useFeedbackContext();
  //   let sortedFeedbacks = [...filteredFeedbacks];

  const sortedFeedbacks = filteredFeedbacks.slice().sort((a, b) => {
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
      //   default:
      //     return sortedFeedbacks;
    }
  });

  //   switch (sort) {
  //     case "mostUpvotes":
  //       sortedFeedbacks.sort((a, b) => a.upvotes - b.upvotes);

  //       break;
  //     case "leastUpvotes":
  //       sortedFeedbacks.sort((a, b) => b.upvotes - a.upvotes);
  //       break;
  //     case "mostComments":
  //       sortedFeedbacks.sort(
  //         (a, b) =>
  //           sortedFeedbacks.comments && a.comments.length - b.comments.length
  //       );
  //       break;
  //     case "leastComments":
  //       sortedFeedbacks.sort(
  //         (a, b) =>
  //           sortedFeedbacks.comments && b.comments.length - a.comments.length
  //       );
  //       break;
  //     default:
  //       sortedFeedbacks = [...filteredFeedbacks];
  //   }

  return (
    <SortedFeedbackContext.Provider value={{ sortedFeedbacks, sort, setSort }}>
      {children}
    </SortedFeedbackContext.Provider>
  );
};

export const useSortedFeedbackContext = () => useContext(SortedFeedbackContext);
