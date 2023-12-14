import { ReplyType } from '../../types/models';
import User from '../User';

type ReplyProps = {
  reply: ReplyType;
};

const Reply = ({ reply }: ReplyProps) => {
  const { content, replyingTo, user } = reply;

  return (
    <div className="reply-content">
      <div className="comment-header">
        <User user={user} />
      </div>
      <div>
        <p className="comment-content ml-0 sm:ml-16 ">
          <span className="font-bold text-tertiary">{replyingTo}</span>{' '}
          {content}
        </p>
      </div>
    </div>
  );
};

export default Reply;
