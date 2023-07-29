import { ReplyType } from "../../types/models";
import CommentHeader from "../comments/CommentHeader";

const Reply = ({ reply }: ReplyType) => {
  const { name, image, username } = reply.user;
  const { content, replyingTo } = reply;

  return (
    <div className="reply-content">
      <CommentHeader name={name} image={image} username={username} />
      <div>
        <p className="pt-4 pb-[30px] ml-16">
          <span className="text-tertiary font-bold">{replyingTo}</span>{" "}
          {content}
        </p>
      </div>
    </div>
  );
};

export default Reply;
