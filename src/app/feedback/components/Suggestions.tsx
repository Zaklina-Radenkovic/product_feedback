"use client";
import { useSortedFeedbackContext } from "@/state/sortedFeedback";
import NoFeedback from "../../../components/NoFeedback";
import FeedbackCard from "./FeedbackCard";
import LoadingSpinner from "../../../components/LoadingSpinner";
import { useFeedbackContext } from "@/state/feedback";

const Suggestions = () => {
  const { sortedFeedbacks } = useSortedFeedbackContext();
  const { feedbacks, loading } = useFeedbackContext();

  if (!feedbacks?.length) {
    return (
      <div className="h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <>
      {sortedFeedbacks && sortedFeedbacks.length !== 0 ? (
        sortedFeedbacks?.map((sortedFeedback) => {
          return (
            <FeedbackCard key={sortedFeedback.id} feedback={sortedFeedback} />
          );
        })
      ) : (
        <NoFeedback />
      )}
    </>
  );
};

export default Suggestions;
