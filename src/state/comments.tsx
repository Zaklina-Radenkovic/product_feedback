"use client";
import { createContext, ReactNode, useContext } from "react";
import { useFeedbackContext } from "@/state/feedback";
import { useParams } from "next/navigation";
import { CommentType, Feedback } from "@/types/models";

const CommentsContext = createContext<{
  currentFeedback: Feedback | undefined;
  feedbackId: string | string[];
}>({
  currentFeedback: {
    id: null,
    title: "",
    category: "",
    upvotes: 0,
    status: "",
    description: "",
    color: undefined,
    comments: [],
    upvoted: undefined,
  },
  feedbackId: "",
});

export const CommentsProvider = ({ children }: { children: ReactNode }) => {
  const { feedbacks } = useFeedbackContext();
  const params = useParams();
  const { feedbackId } = params;
  const currentFeedback = feedbacks?.find(
    (feedback: Feedback) => feedback.id === feedbackId
  );

  return (
    <CommentsContext.Provider value={{ currentFeedback, feedbackId }}>
      {children}
    </CommentsContext.Provider>
  );
};

export const useCommentsContext = () => useContext(CommentsContext);
