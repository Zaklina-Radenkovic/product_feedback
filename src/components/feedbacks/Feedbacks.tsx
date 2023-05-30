import FeedbackItem from "./FeedbackItem";
import SubHeader from "../SubHeader";
import { Feedback } from "@/types/models";

interface iProductFeedbacks {
  productFeedbacks: Feedback[];
}

const Feedbacks = ({ productFeedbacks }: iProductFeedbacks) => {
  return (
    <>
      <SubHeader />
      {productFeedbacks.map((feedback) => {
        return <FeedbackItem key={feedback.id} feedback={feedback} />;
      })}
    </>
  );
};

export default Feedbacks;
