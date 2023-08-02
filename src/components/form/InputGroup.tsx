import Input from "./Input";

type InputGroupProps = {
  type: string | "dropdown" | "textarea";
  title: string;
  placeholder: string | undefined;
  label: string;
};

const InputGroup = ({ title, placeholder, label, type }: InputGroupProps) => {
  return (
    <>
      <h5 className="pb-2.5 text-secondary font-bold">{title}</h5>
      <Input type="text" placeholder={placeholder} label={label} />
    </>
  );
};

export default InputGroup;
