"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ButtonFeedback from "@/components/button/ButtonFeedback";
import GoBackButton from "@/components/button/GoBackButton";
import FeedbackCard from "@/app/feedback/components/FeedbackCard";

import Comments from "@/components/comments/Comments";
import CommentForm from "@/components/form/CommentForm";
import { useCommentsContext } from "@/state/comments";

const page = () => {
  const router = useRouter();
  const { currentFeedback, feedbackId } = useCommentsContext();

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

        {currentFeedback.comments?.length >= 1 && <Comments />}
        <CommentForm />
      </div>
    );
};

export default page;
