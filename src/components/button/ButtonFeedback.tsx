import Button from "./Button";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick: () => void;
}

const ButtonFeedback = ({ onClick, ...props }: Props) => {
  return (
    <Button
      className="button-feedback text-[15px]"
      onClick={onClick}
      {...props}
    >
      &#43; Add feedback
    </Button>
  );
};

export default ButtonFeedback;
