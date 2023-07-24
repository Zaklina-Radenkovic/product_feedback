import Link from "next/link";
import ButtonVote from "../button/ButtonVote";
import Button from "../button/Button";
import CommentsIcon from "../comments/CommentsIcon";
import { Feedback } from "@/types/models";

interface iSuggestionItem {
  sortedFeedback: Feedback;
}

const FeedbackCard = ({ sortedFeedback }: iSuggestionItem) => {
  const { upvotes, title, description, category, comments, id } =
    sortedFeedback;
  return (
    <div className="feedback">
      <ButtonVote className="btn-upvote">{upvotes}</ButtonVote>
      <div className="feedback-content">
        <Link href={`/feedback/${id}`}>
          <h3 className="text-secondary font-bold text-lg/6">{title}</h3>
        </Link>
        <p className="py-2.5">{description}</p>
        <Button className="button-category">{category}</Button>
      </div>
      <CommentsIcon
        className={`ml-2.5 font-bold ${
          !comments?.length ? "text-gray/75" : "text-secondary"
        }`}
      >
        {comments?.length > 0 ? comments.length : 0}
      </CommentsIcon>
    </div>
  );
};

export default FeedbackCard;
