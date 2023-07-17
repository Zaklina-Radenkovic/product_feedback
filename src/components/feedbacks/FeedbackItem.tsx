import Image from "next/image";
import arrowIconUp from "../../../public/icon-arrow-up.svg";
import commentsIcon from "../../../public/icon-comments.svg";
import Button from "../button/Button";
import { Feedback } from "@/types/models";

interface iFeedbackItem {
  feedback: Feedback;
}

const FeedbackItem = ({ feedback }: iFeedbackItem) => {
  // console.log(feedback);
  const { upvotes, title, description, category } = feedback;
  return (
    <div className="suggestion">
      <div className="suggestion-upvote">
        <button className="pb-[11px] px-3.5 pt-3">
          <Image priority src={arrowIconUp} alt="icon" />
        </button>
        <span className="text-secondary font-bold text-[13px]">{upvotes}</span>
      </div>
      <div className="suggestion-content">
        <h3 className="text-secondary font-bold text-lg/6">{title}</h3>
        <p className="py-2.5">{description}</p>
        <Button className="button-category">{category}</Button>
      </div>
      <div className="suggestion-msg">
        <Image
          priority
          src={commentsIcon}
          alt="icon"
          className="bg-slate-900"
        />
        <span className="ml-2.5 text-secondary font-bold">2</span>
      </div>
    </div>
  );
};

export default FeedbackItem;
