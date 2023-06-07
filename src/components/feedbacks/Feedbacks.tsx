"use client";
import NoSuggestion from "../NoSuggestion";
import FeedbackItem from "./FeedbackItem";
import { useFeedbackContext } from "@/state/feedback";

const Feedbacks = () => {
  const { filteredFeedbacks } = useFeedbackContext();
  // console.log(filteredFeedbacks);

  return (
    <div className="">
      {filteredFeedbacks.length === 0 && <NoSuggestion />}
      {filteredFeedbacks.map((feedback) => {
        return <FeedbackItem key={feedback.id} feedback={feedback} />;
      })}
    </div>
  );
};

export default Feedbacks;
