"use client";
import { useSortedFeedbackContext } from "@/state/sortedFeedback";
import NoSuggestion from "../NoSuggestion";
import SuggestionItem from "./SuggestionItem";

const Suggestions = () => {
  const { sortedFeedbacks } = useSortedFeedbackContext();

  return (
    <div className="">
      {sortedFeedbacks?.length === 0 && <NoSuggestion />}
      {sortedFeedbacks &&
      sortedFeedbacks.length &&
      sortedFeedbacks !== undefined ? (
        sortedFeedbacks?.map((sortedFeedback) => {
          return (
            <SuggestionItem
              key={sortedFeedback.id}
              sortedFeedback={sortedFeedback}
            />
          );
        })
      ) : (
        // <NoSuggestion />
        <p>Loading....</p>
      )}
    </div>
  );
};

export default Suggestions;
