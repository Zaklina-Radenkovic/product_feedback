import Button from "./Button";
import Image from "next/image";
import arrowIconUp from "../../../public/icon-arrow-up.svg";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick: () => void;
}

const ButtonVote = ({ children, onClick, className, ...props }: Props) => {
  return (
    <div className={className}>
      <Button className={className} {...props}>
        <Image src={arrowIconUp} alt="icon" />
      </Button>
      <span className={className}>{children}</span>
    </div>
  );
};

export default ButtonVote;
