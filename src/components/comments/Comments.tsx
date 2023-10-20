import { useCommentsContext } from "@/state/comments";
import Comment from "./Comment";
import { CommentType } from "@/types/models";

type Comments = {
  comments: Comment[];
};

const Comments = () => {
  const { currentFeedback } = useCommentsContext();
  // const lastEl = feedback.comments.slice(-1);

  if (currentFeedback?.comments?.length) {
    return (
      <div className="feedback flex-col">
        <h3 className="text-secondary font-bold text-lg/6">
          {currentFeedback?.comments && currentFeedback?.comments.length}{" "}
          Comments
        </h3>

        {currentFeedback.comments &&
          currentFeedback.comments.map((comment: CommentType) => (
            <Comment key={comment.id} comment={comment} />
          ))}
      </div>
    );
  } else {
    return null;
  }
};

export default Comments;
