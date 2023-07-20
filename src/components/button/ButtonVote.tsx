import Image from "next/image";
import Button from "./Button";
import arrowIconUp from "../../../public/icon-arrow-up.svg";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick: () => void;
}

const ButtonVote = ({ children, onClick, className, ...props }: Props) => {
  return (
    <div className={className}>
      <Button {...props}>
        <Image priority src={arrowIconUp} alt="icon" />
      </Button>
      <span className="text-secondary font-bold text-[13px]">{children}</span>
    </div>
  );
};

export default ButtonVote;
