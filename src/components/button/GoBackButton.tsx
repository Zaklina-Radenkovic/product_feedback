import Button from "./Button";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className: string | undefined;
  stroke: string;
}

const GoBackButton = ({ className, stroke, ...props }: Props) => {
  return (
    <Button className="flex items-center">
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
        className={
          `text-xs/3 ml-3.5 hover:underline  font-semibold ` + className
        }
      >
        Go Back
      </span>
    </Button>
  );
};

export default GoBackButton;
