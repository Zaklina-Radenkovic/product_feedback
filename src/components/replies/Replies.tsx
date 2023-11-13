import React, { Dispatch, SetStateAction } from 'react';
import Reply from './Reply';
import { ReplyType } from '../../types/models';
import { useCommentsContext } from '@/state/comments';

type RepliesProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  id: string;
  feedbackId: any;
  replies: [];
};

const Replies = ({ open, setOpen, replies }: RepliesProps) => {
  const { comment }: any = useCommentsContext();
  const {} = comment?.replies;

  return (
    <div className="replies">
      {replies?.map((reply, index) => (
        <Reply key={index} reply={reply} open={open} setOpen={setOpen} />
      ))}
    </div>
  );
};

export default Replies;
