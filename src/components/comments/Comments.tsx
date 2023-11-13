import { useCommentsContext } from '@/state/comments';
import Comment from './Comment';
import { CommentType } from '@/types/models';

type Comments = {
  comments: Comment[];
};

const Comments = () => {
  const { currentFeedback } = useCommentsContext();

  if (currentFeedback?.comments?.length) {
    return (
      <div className="box">
        <h3 className="text-lg/6 font-bold text-secondary">
          {currentFeedback?.comments && currentFeedback?.comments.length}{' '}
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
