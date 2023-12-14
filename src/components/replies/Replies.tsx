import Reply from './Reply';
import { useCommentsContext } from '@/state/comments';

type RepliesProps = {
  id: string;
  feedbackId: any;
  replies: [];
};

const Replies = ({ replies }: RepliesProps) => {
  const { comment }: any = useCommentsContext();
  const {} = comment?.replies;

  return (
    <div className="replies">
      {replies?.map((reply, index) => <Reply key={index} reply={reply} />)}
    </div>
  );
};

export default Replies;
