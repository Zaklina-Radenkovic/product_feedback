import FeedbackItem from "./FeedbackItem";
import SubHeader from "../SubHeader";
import { iProductFeedbacks } from "@/types/models";

// export interface iProductFeedbacks extends Feedback {
//   productFeedbacks: Feedback[];
// }

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
