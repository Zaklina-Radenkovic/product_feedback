import User from "../User";
import { UserType } from "@/types/models";

const CommentHeader = ({ name, image, username }: UserType) => {
  return (
    <div className="comment-header">
      <User name={name} image={image} username={username} />
      <p className="text-primary font-bold ml-auto">Reply</p>
    </div>
  );
};

export default CommentHeader;
