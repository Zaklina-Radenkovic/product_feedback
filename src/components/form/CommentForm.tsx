import { useState } from "react";
import ButtonFeedback from "../button/ButtonFeedback";
import {
  doc,
  getDoc,
  setDoc,
  getDocs,
  deleteDoc,
  query,
  addDoc,
  collection,
  updateDoc,
  DocumentData,
  writeBatch,
  arrayUnion,
  DocumentReference,
} from "firebase/firestore";
import {
  getFeedbacksAndDocuments,
  updateComments,
  updateFeedback,
  getDocument,
  db,
} from "@/lib/firebase";
import { nanoid } from "nanoid";
import { useFeedbackContext } from "@/state/feedback";
import { CommentType } from "@/types/models";
import { useCommentsContext } from "@/state/comments";

const CommentForm = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const { feedbackId } = useCommentsContext();
  const { setFeedbacks } = useFeedbackContext();

  const characterLimit = 255;

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (text.trim() === "") return setError(`Reply can't be empty!`);

    const newComment: CommentType = {
      content: text,
      user: {
        image: "user-images/image-george.jpg",
        name: "George Partridge",
        username: "soccerviewer8",
      },
      replies: [],
      id: nanoid(),
    };

    try {
      await updateComments(feedbackId as string, newComment);
      setText("");
      const feedbacks = await getFeedbacksAndDocuments("feedbacks");
      setFeedbacks(feedbacks);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="px-[1.87rem] pt-[1.56rem] pb-[1.87rem] box">
      <h3 className="pb-[1.87rem] text-secondary font-bold">Add Comment</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          onChange={(e) => setText(e.target.value)}
          id="message"
          rows={3}
          value={text}
          maxLength={characterLimit}
          className="block p-5 w-full text-sm text-gray-900 bg-gray-light rounded-lg mb-[1.87rem]  focus:outline-primary focus:outline-1"
          placeholder="Type your comment here..."
        ></textarea>
        {error && <p className="">{error}</p>}
        <div className="flex flex-row items-center justify-between">
          <span>{characterLimit - text.length} charachters left</span>
          <ButtonFeedback
            className="button-feedback px-[1.875rem]"
            type="submit"
            // disabled={submitting}
          >
            Post Comment
          </ButtonFeedback>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;