import { ChangeEvent, FC } from "react";

interface InputProps {
  type: "text" | "number" | "email" | "password";
  label: string | null;
  // value: string | number;
  // name: string;
  placeholder: string | undefined;
  // error: boolean;
  disabled?: boolean;
  // onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
  type,
  label,
  // value,
  // name,
  placeholder,
  // error,
  disabled,
  // onChange,
}) => {
  return (
    <>
      <label htmlFor="" className="pb-5">
        {label}
      </label>
      <input
        type={type}
        // id={label}
        // value={value}
        // name={name}
        placeholder={placeholder}
        // onChange={onChange}
        disabled={disabled}
        className="py-3 pl-5 bg-gray-light rounded-lg mb-6 focus:outline-primary focus:outline-1"
      />
      {/* {error && <p className="error">Input filed can't be empty!</p>} */}
    </>
  );
};

export default Input;
