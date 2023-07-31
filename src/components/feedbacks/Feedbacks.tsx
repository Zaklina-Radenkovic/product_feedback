"use client";
import { useSortedFeedbackContext } from "@/state/sortedFeedback";
import NoFeedback from "../NoFeedback";
import FeedbackCard from "./FeedbackCard";

const Feedbacks = () => {
  const { sortedFeedbacks } = useSortedFeedbackContext();

  return (
    <div className="">
      {sortedFeedbacks?.length === 0 && <NoFeedback />}
      {sortedFeedbacks &&
      sortedFeedbacks.length &&
      sortedFeedbacks !== undefined ? (
        sortedFeedbacks?.map((sortedFeedback) => {
          return (
            <FeedbackCard
              key={sortedFeedback.id}
              feedback={sortedFeedback}
            />
          );
        })
      ) : (
        // <NoFeedback />
        <p>Loading....</p>
      )}
    </div>
  );
};

export default Feedbacks;
