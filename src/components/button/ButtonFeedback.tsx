import Button from "./Button";

const ButtonFeedback = ({ onClick, ...props }: any) => {
  return (
    <Button
      className="button-feedback text-[15px]"
      onClick={onClick}
      {...props}
    >
      + Add feedback
    </Button>
  );
};

export default ButtonFeedback;
