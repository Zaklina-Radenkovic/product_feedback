"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ButtonFeedback from "@/components/button/ButtonFeedback";
import GoBackButton from "@/components/button/GoBackButton";
import FeedbackCard from "@/components/feedbacks/FeedbackCard";
import { useFeedbackContext } from "@/state/feedback";

import { useParams } from "next/navigation";
import Comments from "@/components/comments/Comments";
import TextForm from "@/components/form/TextForm";

const page = () => {
  const router = useRouter();
  const { feedbacks } = useFeedbackContext();

  const params = useParams();
  const { feedbackId } = params;

  const currentFeedback = feedbacks?.find(
    (feedback) => feedback.id === feedbackId
  );

  if (currentFeedback)
    return (
      <div className="w-[51.5rem] mx-auto">
        <header className="flex flex-row justify-between items-center">
          <GoBackButton stroke="blue" onClick={() => router.push("/")} />
          <Link href={`${feedbackId}/edit`}>
            <ButtonFeedback className="button-feedback bg-primary px-[1.875rem] hover:bg-primary">
              Edit Feedback
            </ButtonFeedback>
          </Link>
        </header>
        <FeedbackCard feedback={currentFeedback} />
        {currentFeedback.comments?.length >= 1 && (
          <Comments feedback={currentFeedback} />
        )}
        <TextForm />
      </div>
    );
};

export default page;
