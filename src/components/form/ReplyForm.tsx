import { nanoid } from 'nanoid';
import toast from 'react-hot-toast';
import { useState, Dispatch, SetStateAction } from 'react';
import {
  getFeedbacksAndDocuments,
  updateComments,
  removeItem,
} from '@/lib/firebase';
import ButtonFeedback from '../button/ButtonFeedback';
import { useFeedbackContext } from '@/state/feedback';
import { useCommentsContext } from '@/state/comments';
import { ReplyType, CommentType } from '@/types/models';

type ReplyFormProps = {
  comment: CommentType;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const ReplyForm = ({ comment, setOpen }: ReplyFormProps) => {
  const { user, id } = comment;
  const [text, setText] = useState('');
  const { setFeedbacks } = useFeedbackContext();
  const { currentFeedback, feedbackId } = useCommentsContext();

  const textHandler = (e: { target: { value: SetStateAction<string> } }) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (text.trim() === '') return toast.error(`Reply can't be empty!`);

    const newReply: ReplyType = {
      content: text,
      replyingTo: user.username,
      user: {
        image: 'user-images/image-jesse.jpg',
        name: 'Jesse Ronda',
        username: 'jesse10930',
      },
      id: nanoid(),
    };

    try {
      if (newReply) {
        const comment = currentFeedback?.comments.find(
          (comment) => comment.id === id,
        );
        //first we need to remove it, because we will have a duplicate comment
        await removeItem(feedbackId as string, comment as {});
        const { replies } = comment || {};
        replies && replies.push(newReply);
        const newComment = { ...comment, replies };
        await updateComments(feedbackId as string, newComment);
        setOpen(false);
      }

      const feedbacks = await getFeedbacksAndDocuments('feedbacks');
      setFeedbacks(feedbacks);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="ml-16 flex flex-row justify-between gap-3"
    >
      <textarea
        onChange={textHandler}
        id="message"
        rows={2}
        value={text}
        maxLength={250}
        className="text-gray-900 mb-[1.87rem] block w-[85%] rounded-lg bg-gray-light p-5 text-sm focus:outline-1 focus:outline-primary"
        placeholder={`Reply to ${comment && user?.username}`}
      ></textarea>

      <ButtonFeedback
        className="button-feedback self-baseline px-2 py-3 text-xs"
        type="submit"
        // disabled={submitting}
      >
        Post Reply
      </ButtonFeedback>
    </form>
  );
};

export default ReplyForm;
