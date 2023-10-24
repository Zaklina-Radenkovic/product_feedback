import { useCommentsContext } from "@/state/comments";
import User from "../User";
import { UserType } from "@/types/models";
import { useState, Dispatch, SetStateAction } from "react";

type CommentHeaderProps = {
  user: UserType;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  comment: any;
};

const CommentHeader = ({
  open,
  setOpen,
  user,
  comment,
}: CommentHeaderProps) => {
  return (
    <div className="comment-header">
      <User user={user} />
      {comment?.user ? (
        <button
          className="text-primary font-bold ml-auto"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {!open ? "Reply" : "Cancel"}
        </button>
      ) : null}
    </div>
  );
};

export default CommentHeader;
