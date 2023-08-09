"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import GoBackButton from "@/components/button/GoBackButton";
import { useParams } from "next/navigation";
import Form from "@/components/form/Form";
import { useFeedbackContext } from "@/state/feedback";

const page = () => {
  const router = useRouter();
  const params = useParams();
  const { feedbackId } = params;
  const { feedbacks } = useFeedbackContext();
  const currentFeedback = feedbacks?.find(
    (feedback) => feedback.id === feedbackId
  );

  if (currentFeedback) {
    return (
      <div className="w-[490px] mx-auto text-sm/3 tracking-tight">
        <GoBackButton
          stroke="blue"
          onClick={() => router.push(`/feedback/${feedbackId}`)}
        />
        <Form
          type="edit"
          title=""
          currentFeedback={currentFeedback}
          feedbackId={feedbackId}
        />
      </div>
    );
  }
};

export default page;
