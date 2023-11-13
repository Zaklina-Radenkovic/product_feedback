import Link from 'next/link';
import { useState } from 'react';
import ButtonVote from '../../../components/button/ButtonVote';
import Button from '../../../components/button/Button';
import CommentsIcon from '../../../components/comments/CommentsIcon';
import { useFeedbackContext } from '@/state/feedback';
import { Feedback } from '@/types/models';
import { updateFeedback, getFeedbacksAndDocuments } from '@/lib/firebase';

interface iSuggestionItem {
  feedback: Feedback;
  name: string;
}

const FeedbackCard = ({ feedback, name }: iSuggestionItem) => {
  const { upvotes, title, description, category, comments, id, upvoted } =
    feedback;
  const [feedbackVotes, setFeedbackVotes] = useState(upvotes);
  const { setFeedbacks } = useFeedbackContext();
  const handleUpvote = async () => {
    if (upvoted === null || upvoted === false) {
      setFeedbackVotes((upvotes) => feedback?.upvotes + 1);

      const data = {
        upvoted: true,
        upvotes: feedback?.upvotes + 1,
      };
      await updateFeedback(id || '', data);
      const feedbacks = await getFeedbacksAndDocuments('feedbacks');
      setFeedbacks(feedbacks);
    }

    if (upvoted === true) {
      setFeedbackVotes((upvotes) => feedback?.upvotes - 1);
      const data = {
        upvoted: false,
        upvotes: feedback?.upvotes - 1,
      };
      await updateFeedback(id || '', data);
      const feedbacks = await getFeedbacksAndDocuments('feedbacks');
      setFeedbacks(feedbacks);
    }
  };

  if (name) {
    return (
      <>
        <Link href={`/feedback/${id}`}>
          <h3 className="pb-3 font-bold text-secondary">{title}</h3>
        </Link>
        <p className="pb-5 leading-5">{description}</p>
        <Button className="button-category">{category}</Button>
        <div className="mt-3.5 flex flex-row items-center justify-between">
          <ButtonVote
            className={`md:btn-upvote-x ${
              upvoted ? 'bg-primary text-white' : ''
            }`}
            onClick={handleUpvote}
            upvoted={upvoted}
          >
            {upvotes}
          </ButtonVote>
          <CommentsIcon
            className={`ml-1.5 font-bold ${
              !comments?.length ? 'text-secondary/50' : 'text-secondary'
            }`}
          >
            {comments?.length > 0 ? comments.length : 0}
          </CommentsIcon>
        </div>
      </>
    );
  }

  return (
    <div className="feedback">
      <ButtonVote
        upvoted={upvoted}
        className={upvoted ? 'bg-primary text-white' : ''}
        onClick={handleUpvote}
      >
        {feedbackVotes}
      </ButtonVote>
      <div className="feedback-content">
        <Link href={`/feedback/${id}`}>
          <h3 className="text-lg/6 font-bold text-secondary">{title}</h3>
        </Link>
        <p className="py-3 leading-5">{description}</p>
        <Button className="button-category">{category}</Button>
      </div>
      <CommentsIcon
        className={`ml-2.5 font-bold ${
          !comments?.length ? 'text-secondary/50' : 'text-secondary'
        }`}
      >
        {comments?.length > 0 ? comments.length : 0}
      </CommentsIcon>
    </div>
  );
};

export default FeedbackCard;
