"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import GoBackButton from "@/components/button/GoBackButton";
import { useParams } from "next/navigation";
import EditForm from "@/components/form/EditForm";
import { useFeedbackContext } from "@/state/feedback";

const page = () => {
  const router = useRouter();
  const params = useParams();
  const { feedbackId } = params;
  const { feedbacks, setFeedbacks } = useFeedbackContext();
  const currentFeedback = feedbacks?.find(
    (feedback) => feedback.id === feedbackId
  );
  // const [editFeedback, setEditFeedback] = useState(currentFeedback);
  // console.log("Edit page 1 ", editFeedback);
  // useEffect(() => {
  //   if (editFeedback)
  //     setFeedbacks((prev) => {
  //       return [...prev, editFeedback];
  //     });
  // }, [currentFeedback]);

  // console.log("Edit page 2 ", editFeedback);
  // useEffect(() => {
  //   console.log("Edit page ", currentFeedback);
  // }, [currentFeedback]);

  if (currentFeedback) {
    return (
      <div className="w-[490px] mx-auto text-sm/3 tracking-tight">
        <GoBackButton
          stroke="blue"
          onClick={() => router.push(`/feedback/${feedbackId}`)}
        />

        <EditForm
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
