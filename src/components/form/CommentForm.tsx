import { useState } from 'react';
import ButtonFeedback from '../button/ButtonFeedback';
import { getFeedbacksAndDocuments, updateComments } from '@/lib/firebase';
import { nanoid } from 'nanoid';
import { useFeedbackContext } from '@/state/feedback';
import { CommentType } from '@/types/models';
import { useCommentsContext } from '@/state/comments';

const CommentForm = () => {
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const { feedbackId } = useCommentsContext();
  const { setFeedbacks } = useFeedbackContext();

  const characterLimit = 255;

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (text.trim() === '') return setError(`Reply can't be empty!`);

    const newComment: CommentType = {
      content: text,
      user: {
        image: 'user-images/image-jesse.jpg',
        name: 'Jesse Ronda',
        username: 'jesse10930',
      },
      replies: [],
      id: nanoid(),
    };

    try {
      await updateComments(feedbackId as string, newComment);
      setText('');
      const feedbacks = await getFeedbacksAndDocuments('feedbacks');
      setFeedbacks(feedbacks);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="box mt-6">
      <h3 className="pb-[1.87rem] font-bold text-secondary">Add Comment</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          onChange={(e) => setText(e.target.value)}
          id="message"
          rows={3}
          value={text}
          maxLength={characterLimit}
          className="text-gray-900 mb-[1.87rem] block w-full rounded-lg bg-gray-light p-5 text-sm  focus:outline-1 focus:outline-primary"
          placeholder="Type your comment here..."
        ></textarea>
        {error && <p className="">{error}</p>}
        <div className="flex flex-row items-center justify-between">
          <span className="text-sm sm:text-base">
            {characterLimit - text.length} charachters left
          </span>
          <ButtonFeedback
            className="button-feedback px-4 sm:px-[1.875rem]"
            type="submit"
            // disabled={submitting}
          >
            Post Comment
          </ButtonFeedback>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
