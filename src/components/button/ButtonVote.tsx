import Button from './Button';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick: () => void;
  className: string | undefined;
  upvoted: boolean | null;
}

const ButtonVote = ({ children, onClick, upvoted, className }: Props) => {
  return (
    <Button
      className={`${className} + md:btn-upvote-md btn-upvote-x items-center gap-2.5 rounded-lg bg-gray-light p-2.5 text-[13px] font-bold text-secondary`}
      onClick={onClick}
    >
      <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 6l4-4 4 4"
          stroke={upvoted ? '#fff' : '#4661E6'}
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
