import Image from "next/image";
import Button from "./Button";
import arrowIconUp from "../../../public/icon-arrow-up.svg";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick: () => void;
  className: string | undefined;
  upvoted: boolean | undefined;
}

const ButtonVote = ({ children, onClick, className, upvoted }: Props) => {
  return (
    <Button className={className} onClick={onClick}>
      <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 6l4-4 4 4"
          stroke={upvoted ? "#fff" : "#4661E6"}
          strokeWidth="2"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
      {children}
    </Button>
  );
};

export default ButtonVote;
