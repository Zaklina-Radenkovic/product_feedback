"use client";
import {
  useContext,
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { Feedback } from "@/types/models";

const SortedFeedbackContext = createContext<{
  sortedFeedbacks: Feedback[] | null;
  sortBy: string;
  setSortBy: Dispatch<SetStateAction<string>>;
}>({
  sortedFeedbacks: [],
  sortBy: "",
  setSortBy: () => null,
});

import { useFeedbackContext } from "./feedback";

export const SortedFeedbackProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [sortBy, setSortBy] = useState<string>("mostUpvotes");

  const { filteredFeedbacks } = useFeedbackContext();

  //feedbacks with status 'suggestion' sorted by most/least upvotes and comments

  const sortedFeedbacks = filteredFeedbacks
    .filter((item) => item.status === "suggestion")
    .sort((a, b) => {
      switch (sortBy) {
        case "mostUpvotes":
          return b.upvotes - a.upvotes;
        case "leastUpvotes":
          return a.upvotes - b.upvotes;
        case "mostComments":
          // if (!a.comments) {
          //   return -1;
          // }
          // if (!b.comments) {
          //   return 1;
          // }
          return b.comments.length - a.comments.length;
        case "leastComments":
          // if (!a.comments) {
          //   return 1;
          // }
          // if (!b.comments) {
          //   return -1;
          // }
          return a.comments.length - b.comments.length;
        default:
          return b.upvotes - a.upvotes;
      }
    });

  return (
    <SortedFeedbackContext.Provider
      value={{
        sortedFeedbacks,
        sortBy,
        setSortBy,
      }}
    >
      {children}
    </SortedFeedbackContext.Provider>
  );
};

export const useSortedFeedbackContext = () => useContext(SortedFeedbackContext);
