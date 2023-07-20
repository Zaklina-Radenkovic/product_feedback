import ButtonVote from "../button/ButtonVote";
import Button from "../button/Button";
import CommentsIcon from "../comments/CommentsIcon";
import { Feedback } from "@/types/models";
import { useFeedbackContext } from "@/state/feedback";

interface iSuggestionItem {
  sortedFeedback: Feedback;
}

const SuggestionItem = ({ sortedFeedback }: iSuggestionItem) => {
  // const { upvotes, setUpvotes } = useFeedbackContext();
  const { upvotes, title, description, category, comments } = sortedFeedback;
  return (
    <div className="suggestion">
      <ButtonVote className="btn-upvote">{upvotes}</ButtonVote>
      <div className="suggestion-content">
        <h3 className="text-secondary font-bold text-lg/6">{title}</h3>
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

export default SuggestionItem;
