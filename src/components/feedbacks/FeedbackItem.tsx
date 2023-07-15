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
    <div className="suggestion px-[35px]">
      <div className="suggestion-upvote">
        <button className="p-2">
          <Image priority src={arrowIconUp} alt="icon" />
        </button>
        <span className="text-secondary font-bold">{upvotes}</span>
      </div>
      <div className="suggestion-content">
        <h3 className="text-secondary font-bold leading-3">{title}</h3>
        <p className="pb-[18px] pt-4">{description}</p>
        <Button className="button-category">{category}</Button>
      </div>
      <div className="suggestion-msg">
        <Image
          priority
          src={commentsIcon}
          alt="icon"
          className="bg-slate-900"
        />
        <span className="ml-1 text-secondary font-bold">2</span>
      </div>
    </div>
  );
};

export default FeedbackItem;
