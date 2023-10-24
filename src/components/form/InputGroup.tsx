import Input from "./Input";
import { ChangeEvent } from "react";

type InputGroupProps = {
  type: string;
  title: string;
  label: string;
  value: string;
  dropdownSelections: string[];
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const InputGroup = ({
  title,
  label,
  type,
  value,
  onChange,
  dropdownSelections,
}: InputGroupProps) => {
  return (
    <>
      <h5 className="pb-2.5 text-secondary font-bold">{title}</h5>
      <Input
        type={type}
        label={label}
        value={value}
        onChange={onChange}
        dropdownSelections={dropdownSelections}
      />
    </>
  );
};

export default InputGroup;
