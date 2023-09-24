"use client";
import { useSortedFeedbackContext } from "@/state/sortedFeedback";
import NoFeedback from "../../../components/NoFeedback";
import FeedbackCard from "./FeedbackCard";
import LoadingSpinner from "../../../components/LoadingSpinner";
import { useFeedbackContext } from "@/state/feedback";
import { useState } from "react";

const Suggestions = () => {
  const [upvotes, setUpvotes] = useState(0);
  const { sortedFeedbacks } = useSortedFeedbackContext();
  const { feedbacks, loading } = useFeedbackContext();

  if (!feedbacks?.length) {
    return (
      <div className="h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  const handleUpvote = (id: string) => {
    const currentFeedback = sortedFeedbacks?.find(
      (feedback) => feedback.id === id
    );
    const currentUpvotes = currentFeedback!.upvotes++;
    setUpvotes((currentUpvotes) => currentUpvotes + 1);
    console.log(upvotes);
  };

  function getCurrentUpvotes(id) {
    return (
      sortedFeedbacks?.find((feedback) => feedback.id === id)?.upvotes ?? 0
    );
  }

  return (
    <>
      {sortedFeedbacks && sortedFeedbacks.length !== 0 ? (
        sortedFeedbacks?.map((sortedFeedback) => {
          return (
            <FeedbackCard
              key={sortedFeedback.id}
              feedback={sortedFeedback}
              onAddingUpvotes={handleUpvote}
              getCurrentUpvotes={getCurrentUpvotes}
            />
          );
        })
      ) : (
        <NoFeedback />
      )}
    </>
  );
};

export default Suggestions;
