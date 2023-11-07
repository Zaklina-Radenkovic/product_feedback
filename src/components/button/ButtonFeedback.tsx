import Button from './Button';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  // onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const ButtonFeedback = ({ onClick, children, ...props }: Props) => {
  return (
    <Button
      className="button-feedback z-0 text-xs sm:text-[15px]"
      onClick={onClick}
      {...props}
    >
      {/* &#43; Add feedback */}
      {children}
    </Button>
  );
};

export default ButtonFeedback;
