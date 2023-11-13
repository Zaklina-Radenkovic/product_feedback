import { useState } from 'react';
import CommentHeader from './CommentHeader';
import ReplyForm from '../form/ReplyForm';
import Reply from '../replies/Reply';
import { CommentType } from '@/types/models';

type CommentProps = {
  comment: CommentType;
};

const Comment = ({ comment }: CommentProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="comment">
      <CommentHeader
        comment={comment}
        user={comment.user}
        open={open}
        setOpen={setOpen}
      />

      <p className="comment-content ml-0 sm:ml-16">{comment?.content}</p>
      {open && <ReplyForm comment={comment} setOpen={setOpen} />}
      <div className="replies">
        {comment?.replies &&
          comment?.replies.map((reply, index) => (
            <Reply
              key={index}
              reply={reply}
              open={open}
              setOpen={setOpen}
              comment={comment}
            />
          ))}
      </div>
    </div>
  );
};

export default Comment;
