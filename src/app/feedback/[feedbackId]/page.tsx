"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ButtonFeedback from "@/components/button/ButtonFeedback";
import GoBackButton from "@/components/button/GoBackButton";
import FeedbackCard from "@/app/feedback/components/FeedbackCard";
import { useFeedbackContext } from "@/state/feedback";
import { Feedback } from "@/types/models";
import { useParams } from "next/navigation";
import Comments from "@/components/comments/Comments";
import CommentForm from "@/components/form/CommentForm";
import { useCommentsContext } from "@/state/comments";

const page = () => {
  const router = useRouter();
  const { currentFeedback, feedbackId } = useCommentsContext();
  // const { feedbacks, setFeedbacks } = useFeedbackContext();

  // const params = useParams();
  // const { feedbackId } = params;

  // const currentFeedback = feedbacks?.find(
  //   (feedback: Feedback) => feedback.id === feedbackId
  // );

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
        {/* <FeedbackCard  />

        {currentFeedback.comments?.length >= 1 && (
          <Comments feedback={currentFeedback} feedbackId={feedbackId} />
        )}
        <CommentForm currentFeedback={currentFeedback} feedbackId={feedbackId} /> */}
        <FeedbackCard feedback={currentFeedback} />

        {currentFeedback.comments?.length >= 1 && <Comments />}
        <CommentForm />
      </div>
    );
};

export default page;
