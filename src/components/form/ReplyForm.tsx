import ButtonFeedback from "../button/ButtonFeedback";
import { useState, Dispatch, SetStateAction } from "react";
import {
  getFeedbacksAndDocuments,
  getDocument,
  db,
  updateComments,
  updateFeedback,
  removeItem,
} from "@/lib/firebase";
import { nanoid } from "nanoid";
import { useFeedbackContext } from "@/state/feedback";
import { ReplyType, CommentType } from "@/types/models";
import { useCommentsContext } from "@/state/comments";
import { comment } from "postcss";

type ReplyFormProps = {
  comment: CommentType;
  setOpen: Dispatch<SetStateAction<boolean>>;
  reply: {};
};

const ReplyForm = ({ comment, setOpen, reply = {} }: ReplyFormProps) => {
  const { user, id } = comment;
  const [text, setText] = useState("");
  const { setFeedbacks } = useFeedbackContext();
  const { currentFeedback, feedbackId } = useCommentsContext();
  const [error, setError] = useState("");

  const textHandler = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (text.trim() === "") return setError(`Reply can't be empty!`);

    const newReply: ReplyType = {
      content: text,
      replayingTo: "",
      user: {
        image: "user-images/image-george.jpg",
        name: "George Partridge",
        username: "soccerviewer8",
      },
      id: nanoid(),
      replies2: [],
    };

    // const replyToReply = {
    //   content: text,
    //   replayingTo: "",
    //   user: {
    //     image: "user-images/image-george.jpg",
    //     name: "George Partridge",
    //     username: "soccerviewer8",
    //   },
    //   id: nanoid(),
    // };

    try {
      if (newReply) {
        const comment = currentFeedback?.comments.find(
          (comment) => comment.id === id
        );
        //first we need to remove it, because we will have a duplicate comment
        await removeItem(feedbackId, comment);
        const { replies } = comment || {};
        replies && replies.push(newReply);
        const newComment = { ...comment, replies };
        await updateComments(feedbackId, newComment);
        setOpen(false);
      }

      // if (replyToReply) {
      // console.log(reply);
      //first we need to remove it, because we will have a duplicate comment
      // await removeItem(feedbackId, comment);
      // const { replies } = comment || {};
      // replies && replies.push(newReply);
      // const newComment = { ...comment, replies };
      // await updateComments(feedbackId, newComment);
      // }
      // const feedback = await getDocument(feedbackId);
      // const feedbackRef = doc(db, "feedbacks", feedbackId);
      // await updateDoc(feedbackRef, {

      //    feedback?.comments.map((comment) => {
      //   let replies2 = [];
      //   if (comment.replies) {
      //     comment.replies.map((reply) => {
      //       // if (reply.id === id) {
      //       replies2.push(replyToReply);
      //       // }

      //       return reply;
      //     });
      //   }
      //   return comment;
      //   comments: arrayUnion(replies2);
      // })

      //  });

      //       // Atomically add a new region to the "regions" array field.
      // await updateDoc(washingtonRef, {
      //   regions: arrayUnion("greater_virginia")
      // });

      // await updateFeedback(feedback?.id, { ...feedback, comments });
      //// reply to comment

      const feedbacks = await getFeedbacksAndDocuments("feedbacks");
      setFeedbacks(feedbacks);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-row ml-16 justify-between"
    >
      <textarea
        onChange={textHandler}
        id="message"
        rows={2}
        value={text}
        maxLength={250}
        className="block p-5 text-sm text-gray-900 bg-gray-light rounded-lg mb-[1.87rem] focus:outline-primary focus:outline-1 w-[85%]"
        placeholder={`Reply to ${comment && user?.username}`}
      ></textarea>
      {error && <p className="">{error}</p>}
      <ButtonFeedback
        className="button-feedback px-4 text-xs py-3 self-baseline"
        type="submit"
        // disabled={submitting}
      >
        Post Reply
      </ButtonFeedback>
    </form>
  );
};

export default ReplyForm;
