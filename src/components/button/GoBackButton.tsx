import Button from './Button';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  stroke: string;
}

const GoBackButton = ({ stroke, onClick }: Props) => {
  return (
    <Button className="flex items-center" onClick={onClick}>
      <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6 9L2 5l4-4"
          stroke={stroke}
          strokeWidth="2"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
      <span className="ml-[15px] text-xs/3 font-bold hover:underline">
        Go Back
      </span>
    </Button>
  );
};

export default GoBackButton;
