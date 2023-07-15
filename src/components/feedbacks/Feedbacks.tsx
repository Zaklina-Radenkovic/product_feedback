"use client";
import { useSortedFeedbackContext } from "@/state/sortedFeedback";
import NoSuggestion from "../NoSuggestion";
import FeedbackItem from "./FeedbackItem";
import { useFeedbackContext } from "@/state/feedback";

const Feedbacks = () => {
  // const { filteredFeedbacks, feedbacks } = useFeedbackContext();
  const { sortedFeedbacks } = useSortedFeedbackContext();

  return (
    <div className="">
      {sortedFeedbacks?.length === 0 && <NoSuggestion />}
      {sortedFeedbacks &&
      sortedFeedbacks.length &&
      sortedFeedbacks !== undefined ? (
        sortedFeedbacks?.map((feedback) => {
          return <FeedbackItem key={feedback.id} feedback={feedback} />;
        })
      ) : (
        // <NoSuggestion />
        <p>Loading....</p>
      )}
    </div>
  );
};

export default Feedbacks;
