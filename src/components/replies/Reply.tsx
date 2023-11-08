import { ReplyType } from '../../types/models';
import CommentHeader from '../comments/CommentHeader';
import ReplyForm from '../form/ReplyForm';
import { useState, Dispatch, SetStateAction } from 'react';
import { useCommentsContext } from '@/state/comments';
import {
  getFeedbacksAndDocuments,
  db,
  updateComments,
  updateFeedback,
  removeItem,
} from '@/lib/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import ButtonFeedback from '../button/ButtonFeedback';
type ReplyProps = {
  reply: ReplyType;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const Reply = ({ reply, open, setOpen }: ReplyProps) => {
  const { content, replyingTo, user } = reply;
  const [text, setText] = useState('');
  const [openReply, setOpenReply] = useState(false);
  const { currentFeedback, feedbackId } = useCommentsContext();

  const textHandler = (e: { target: { value: SetStateAction<string> } }) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const collectionRef = collection(db, 'feedbacks');
    const desired_value = content;

    const q = query(collectionRef, where('comments', '==', desired_value));

    const querySnapshot = await getDocs(q);
    console.log(querySnapshot);
    querySnapshot.forEach((doc) => {
      //   // doc.data() is never undefined for query doc snapshots
      console.log(doc.data());
    });
  };
  return (
    <div className="reply-content">
      <CommentHeader
        user={user}
        open={openReply}
        setOpen={setOpenReply}
        comment={undefined}
      />
      <div>
        {/* <p className="ml-16 pb-[30px] pt-4 text-[13px] leading-4 sm:text-base sm:leading-5"> */}
        <p className="comment-content ml-0 text-sm leading-4 sm:ml-16 sm:text-base sm:leading-5">
          <span className="font-bold text-tertiary">{replyingTo}</span>{' '}
          {content}
        </p>
        {/* {openReply && <ReplyForm setOpen={setOpenReply} reply={reply} />} */}
        {/* {openReply && (
          <form
            onSubmit={handleSubmit}
            className="flex flex-row ml-16 justify-between"
          >
            <textarea
              onChange={textHandler}
              id="message"
              rows={2}
              value={text}
              maxLength={250}
              className="block p-5 text-sm text-gray-900 bg-gray-light rounded-lg mb-[1.87rem] focus:outline-primary focus:outline-1 w-[85%]"
              // placeholder={`Reply to ${comment && user?.username}`}
            ></textarea>

            <ButtonFeedback
              className="button-feedback px-4 text-xs py-3 self-baseline"
              type="submit"
              // disabled={submitting}
            >
              Post Reply
            </ButtonFeedback>
          </form>
        )} */}
      </div>
      {/* {open && <ReplyForm feedbackId={feedbackId} id={id} />}
      {replies && (
        <Replies
          replies={replies}
          open={open}
          setOpen={setOpen}
          id={id}
          feedbackId={feedbackId}
        />
      )} */}
    </div>
  );
};

export default Reply;
