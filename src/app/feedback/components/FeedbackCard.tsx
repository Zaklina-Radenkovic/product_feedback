import Link from "next/link";
import ButtonVote from "../../../components/button/ButtonVote";
import Button from "../../../components/button/Button";
import CommentsIcon from "../../../components/comments/CommentsIcon";
import { useFeedbackContext } from "@/state/feedback";
import { Feedback } from "@/types/models";
import { useEffect, useState } from "react";
import {
  getDocument,
  updateFeedback,
  getFeedbacksAndDocuments,
} from "@/lib/firebase";

interface iSuggestionItem {
  feedback: Feedback;
}

const FeedbackCard = ({ feedback }: iSuggestionItem) => {
  const { upvotes, title, description, category, comments, id, upvoted } =
    feedback;
  // const [upvoted, setUpvoted] = useState(false);
  const [feedbackVotes, setFeedbackVotes] = useState(upvotes);
  const { setFeedbacks } = useFeedbackContext();
  const handleUpvote = async () => {
    // const feedback = await getDocument(id);

    if (upvoted === undefined || upvoted === false) {
      setFeedbackVotes((upvotes) => feedback?.upvotes + 1);
      // setUpvoted(true);

      const data = {
        upvoted: true,
        upvotes: feedback?.upvotes + 1,
      };
      await updateFeedback(id || "", data);
      const feedbacks = await getFeedbacksAndDocuments("feedbacks");
      setFeedbacks(feedbacks);
    }

    if (upvoted === true) {
      setFeedbackVotes((upvotes) => feedback?.upvotes - 1);
      const data = {
        upvoted: false,
        upvotes: feedback?.upvotes - 1,
      };
      await updateFeedback(id || "", data);
      const feedbacks = await getFeedbacksAndDocuments("feedbacks");
      setFeedbacks(feedbacks);
    }
  };

  return (
    <div className="feedback">
      <ButtonVote
        className={`btn-upvote ${upvoted ? "bg-red/50" : "bg-gray-light"}`}
        onClick={handleUpvote}
      >
        {feedbackVotes}
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
