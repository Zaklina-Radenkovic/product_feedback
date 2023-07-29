import React from "react";
import Reply from "./Reply";
import { ReplyType } from "../../types/models";

const Replies = ({ replies }: ReplyType[]) => {
  return (
    <div className="replies">
      {replies?.map((reply, index) => (
        <Reply key={index} reply={reply} />
      ))}
    </div>
  );
};

export default Replies;
