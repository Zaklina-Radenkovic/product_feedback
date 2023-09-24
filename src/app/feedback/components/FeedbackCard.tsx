import Link from "next/link";
import ButtonVote from "../../../components/button/ButtonVote";
import Button from "../../../components/button/Button";
import CommentsIcon from "../../../components/comments/CommentsIcon";
import { Feedback } from "@/types/models";
import { useEffect, useState } from "react";

interface iSuggestionItem {
  feedback: Feedback;
  onAddingUpvotes: (id) => void;
  getCurrentUpvotes: (id) => void;
}

const FeedbackCard = ({
  feedback,
  onAddingUpvotes,
  getCurrentUpvotes,
}: iSuggestionItem) => {
  const { upvotes, title, description, category, comments, id } = feedback;
  const currentUpvotes = getCurrentUpvotes(id);

  return (
    <div className="feedback">
      <ButtonVote className="btn-upvote" onClick={() => onAddingUpvotes(id)}>
        {currentUpvotes}
      </ButtonVote>
      <div className="feedback-content">
        <Link href={`/feedback/${id}`}>
          <h3 className="text-secondary font-bold text-lg/6">{title}</h3>
        </Link>
        <p className="py-2.5">{description}</p>
        <Button className="button-category">{category}</Button>
      </div>
      <CommentsIcon
        className={`ml-2.5 font-bold ${
          !comments?.length ? "text-secondary/50" : "text-secondary"
        }`}
      >
        {comments?.length > 0 ? comments.length : 0}
      </CommentsIcon>
    </div>
  );
};

export default FeedbackCard;
