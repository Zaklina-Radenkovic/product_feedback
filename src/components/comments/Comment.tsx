import { CommentType } from "@/types/models";
import Replies from "../replies/Replies";
import CommentHeader from "./CommentHeader";
import { useState } from "react";
import ReplyForm from "../form/ReplyForm";
import { useCommentsContext } from "@/state/comments";
import Reply from "../replies/Reply";

type CommentProps = {
  comment: CommentType;
};

const Comment = ({ comment }: CommentProps) => {
  const [open, setOpen] = useState(false);
  const { currentFeedback, feedbackId } = useCommentsContext();

  return (
    <div className="comment">
      <CommentHeader user={comment.user} open={open} setOpen={setOpen} />
      {/* {replies?.length > 0 && <div className="horizontal-line"></div>} */}

      <p className="comment-content">{comment?.content}</p>
      {open && <ReplyForm comment={comment} setOpen={setOpen} />}
      <div className="replies">
        {comment?.replies &&
          comment?.replies.map((reply, index) => (
            <Reply
              key={index}
              reply={reply}
              open={open}
              setOpen={setOpen}
              // id={id}
              // feedbackId={feedbackId}
            />
          ))}
      </div>
    </div>
  );
};

export default Comment;
