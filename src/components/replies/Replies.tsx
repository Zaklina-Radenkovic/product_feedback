import React from "react";
import Reply from "./Reply";
import { ReplyType } from "../../types/models";
import { useCommentsContext } from "@/state/comments";

const Replies = ({ replies, open, setOpen, id, feedbackId }: ReplyType[]) => {
  const { comment } = useCommentsContext();
  const {} = comment?.replies;

  return (
    <div className="replies">
      {replies?.map((reply, index) => (
        <Reply
          key={index}
          reply={reply}
          open={open}
          setOpen={setOpen}
          id={id}
          feedbackId={feedbackId}
        />
      ))}
    </div>
  );
};

export default Replies;
