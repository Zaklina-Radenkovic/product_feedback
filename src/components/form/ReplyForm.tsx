import ButtonFeedback from '../button/ButtonFeedback';
import { useState, Dispatch, SetStateAction } from 'react';
import {
  getFeedbacksAndDocuments,
  getDocument,
  db,
  updateComments,
  updateFeedback,
  removeItem,
} from '@/lib/firebase';
import { nanoid } from 'nanoid';
import { useFeedbackContext } from '@/state/feedback';
import { ReplyType, CommentType } from '@/types/models';
import { useCommentsContext } from '@/state/comments';

type ReplyFormProps = {
  comment: CommentType;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const ReplyForm = ({ comment, setOpen }: ReplyFormProps) => {
  const { user, id } = comment;
  const [text, setText] = useState('');
  const { setFeedbacks } = useFeedbackContext();
  const { currentFeedback, feedbackId } = useCommentsContext();
  const [error, setError] = useState('');

  const textHandler = (e: { target: { value: SetStateAction<string> } }) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (text.trim() === '') return setError(`Reply can't be empty!`);

    const newReply: ReplyType = {
      content: text,
      replyingTo: '',
      user: {
        image: 'user-images/image-george.jpg',
        name: 'George Partridge',
        username: 'soccerviewer8',
      },
      id: nanoid(),
    };

    // const replyToReply = {
    //   content: text,
    //   replayingTo: "",
    //   user: {
    //     image: "user-images/image-george.jpg",
    //     name: "George Partridge",
    //     username: "soccerviewer8",
    //   },
    //   id: nanoid(),
    // };

    try {
      if (newReply) {
        const comment = currentFeedback?.comments.find(
          (comment) => comment.id === id,
        );
        //first we need to remove it, because we will have a duplicate comment
        await removeItem(feedbackId as any, comment as any);
        const { replies } = comment || {};
        replies && replies.push(newReply);
        const newComment = { ...comment, replies };
        await updateComments(feedbackId as any, newComment);
        setOpen(false);
      }

      // if (replyToReply) {
      // console.log(reply);
      //first we need to remove it, because we will have a duplicate comment
      // await removeItem(feedbackId, comment);
      // const { replies } = comment || {};
      // replies && replies.push(newReply);
      // const newComment = { ...comment, replies };
      // await updateComments(feedbackId, newComment);
      // }
      // const feedback = await getDocument(feedbackId);
      // const feedbackRef = doc(db, "feedbacks", feedbackId);
      // await updateDoc(feedbackRef, {

      //    feedback?.comments.map((comment) => {
      //   let replies2 = [];
      //   if (comment.replies) {
      //     comment.replies.map((reply) => {
      //       // if (reply.id === id) {
      //       replies2.push(replyToReply);
      //       // }

      //       return reply;
      //     });
      //   }
      //   return comment;
      //   comments: arrayUnion(replies2);
      // })

      //  });

      //       // Atomically add a new region to the "regions" array field.
      // await updateDoc(washingtonRef, {
      //   regions: arrayUnion("greater_virginia")
      // });

      // await updateFeedback(feedback?.id, { ...feedback, comments });
      //// reply to comment

      const feedbacks = await getFeedbacksAndDocuments('feedbacks');
      setFeedbacks(feedbacks);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="ml-16 flex flex-row justify-between"
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
      {error && <p className="">{error}</p>}
      <ButtonFeedback
        className="button-feedback self-baseline px-4 py-3 text-xs"
        type="submit"
        // disabled={submitting}
      >
        Post Reply
      </ButtonFeedback>
    </form>
  );
};

export default ReplyForm;
