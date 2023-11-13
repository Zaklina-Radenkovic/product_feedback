import Button from './Button';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const ButtonFeedback = ({ onClick, children, ...props }: Props) => {
  return (
    <Button
      className="button-feedback z-0 text-xs sm:text-[15px]"
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ButtonFeedback;
