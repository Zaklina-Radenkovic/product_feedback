import Comment from "./Comment";
import { CommentType, Feedback } from "@/types/models";

type Comments = {
  comments: Comment[];
};

const Comments = ({ feedback }: Feedback) => {
  const lastEl = feedback.comments.slice(-1);

  if (feedback.comments?.length) {
    return (
      <div className="feedback flex-col">
        <h3 className="text-secondary font-bold text-lg/6">
          {feedback.comments && feedback?.comments.length} Comments
        </h3>

        {feedback.comments &&
          feedback.comments.map(
            ({ id, content, user, replies }: CommentType) => (
              <Comment
                key={id}
                id={id}
                content={content}
                user={user}
                replies={replies}
              />
            )
          )}
      </div>
    );
  } else {
    return null;
  }
};

export default Comments;
