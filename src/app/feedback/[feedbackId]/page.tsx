"use client";
import { useRouter } from "next/navigation";
import ButtonFeedback from "@/components/button/ButtonFeedback";
import GoBackButton from "@/components/button/GoBackButton";
import FeedbackCard from "@/components/feedbacks/FeedbackCard";
import { useFeedbackContext } from "@/state/feedback";

import { useParams } from "next/navigation";
import Comments from "@/components/comments/Comments";
import Form from "@/components/form/Form";

const page = () => {
  const router = useRouter();
  const { feedbacks } = useFeedbackContext();

  const params = useParams();
  const { feedbackId } = params;

  const currentFeedback = feedbacks?.find(
    (feedback) => feedback.id === feedbackId
  );
  console.log(currentFeedback);
  if (currentFeedback)
    return (
      <div className="w-[51.5rem] mx-auto">
        <header className="flex flex-row justify-between items-center">
          <GoBackButton
            className=" text-gray"
            stroke="blue"
            onClick={() => router.back()}
          />
          <ButtonFeedback
            className="button-edit"
            onClick={() => router.push(`${feedbackId}/edit`)}
          >
            Edit Feedback
          </ButtonFeedback>
        </header>
        <FeedbackCard feedback={currentFeedback} />
        {currentFeedback.comments?.length >= 1 && (
          <Comments feedback={currentFeedback} />
        )}
        <Form />
      </div>
    );
};

export default page;
