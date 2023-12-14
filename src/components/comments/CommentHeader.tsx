import User from '../User';
import { CommentType, UserType } from '@/types/models';
import { Dispatch, SetStateAction } from 'react';

type CommentHeaderProps = {
  user: UserType;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  comment: CommentType;
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
      {comment?.user && (
        <button
          className="ml-auto font-bold text-primary"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {!open ? 'Reply' : 'Cancel'}
        </button>
      )}
    </div>
  );
};

export default CommentHeader;
