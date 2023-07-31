import { CommentType } from "@/types/models";
import Replies from "../replies/Replies";
import CommentHeader from "./CommentHeader";

const Comment = ({ id, content, user, replies }: CommentType) => {
  return (
    <div className="comment">
      <CommentHeader
        name={user.name}
        image={user.image}
        username={user.username}
      />
      {/* {replies?.length > 0 && <div className="horizontal-line"></div>} */}

      <p className="comment-content">{content}</p>
      {replies && <Replies replies={replies} />}
    </div>
  );
};

export default Comment;
