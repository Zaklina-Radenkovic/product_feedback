"use client";
import FeedbackItem from "./FeedbackItem";
import SubHeader from "../SubHeader";
import { useFeedbackContext } from "@/state/feedback";

const Feedbacks = () => {
  const { filteredFeedbacks } = useFeedbackContext();
  return (
    <>
      <SubHeader />
      {filteredFeedbacks.map((feedback) => {
        return <FeedbackItem key={feedback.id} feedback={feedback} />;
      })}
    </>
  );
};

export default Feedbacks;
