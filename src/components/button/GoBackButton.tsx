import Button from "./Button";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  stroke: string;
  onClick: () => void;
}

const GoBackButton = ({ stroke, onClick, ...props }: Props) => {
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
      <span
        // className={`text-xs/3 ml-[15px] hover:underline font-bold ` + className}
        className="text-xs/3 ml-[15px] hover:underline font-bold"
      >
        Go Back
      </span>
    </Button>
  );
};

export default GoBackButton;
