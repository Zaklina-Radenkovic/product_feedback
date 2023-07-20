import Image from "next/image";
import commentsIcon from "../../../public/icon-comments.svg";

const CommentsIcon = ({ children, className }) => {
  return (
    <div className="msg">
      <Image priority src={commentsIcon} alt="icon" className="bg-slate-900" />
      <span className={className}>{children}</span>
    </div>
  );
};

export default CommentsIcon;
