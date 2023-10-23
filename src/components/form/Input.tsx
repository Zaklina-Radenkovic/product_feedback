import { ChangeEvent, ChangeEventHandler, FC, useState } from "react";

interface InputProps {
  type: string;
  label: string | null;
  value: string;
  // name: string;
  // error: boolean;
  disabled?: boolean;
  onChange: (
    e: ChangeEvent<HTMLInputElement>
  ) => void | ChangeEventHandler<HTMLSelectElement>;
}

const Input: FC<InputProps> = ({
  type,
  label,
  value,
  name,
  // error,
  disabled,
  onChange,
  dropdownSelections,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <>
      {type === "text" && (
        <>
          <label className="pb-5">{label}</label>
          <input
            type={type}
            // id={label}
            value={value}
            name={name}
            onChange={onChange}
            disabled={disabled}
            className="py-3 pl-5 bg-gray-light rounded-lg mb-6 focus:outline-primary focus:outline-1"
          />
        </>
      )}

      {type === "dropdown" && (
        <div>
          <label className="pb-5 block" htmlFor="search">
            {label}
          </label>

          <select
            onChange={onChange}
            value={value}
            type={type}
            name={name}
            id="search"
            className="w-full p-3 pl-5 bg-gray-light rounded-lg mb-6 focus:outline-primary focus:outline-1"
          >
            {dropdownSelections &&
              dropdownSelections.map((s) => {
                return (
                  <option key={s} value={s}>
                    {s}
                  </option>
                );
              })}
          </select>
        </div>
      )}

      {type === "textarea" && (
        <>
          <label className="pb-5">{label}</label>
          <textarea
            // onChange={(e) => setText(e.target.value)}
            // id="message"
            // rows={3}
            // value={text}
            // maxLength={characterLimit}
            // className="block p-5 w-full text-sm text-gray-900 bg-gray-light rounded-lg mb-[1.87rem]  focus:outline-primary focus:outline-1"
            // placeholder="Type your comment here..."
            onChange={onChange}
            id="message"
            rows={3}
            value={value}
            // maxLength={characterLimit}
            className="block p-5 w-full text-sm text-gray-900 bg-gray-light rounded-lg mb-[1.87rem]  focus:outline-primary focus:outline-1"
            // placeholder="Type your comment here..."
          ></textarea>
        </>
      )}
      {/* {error && <p className="error">Input filed can't be empty!</p>} */}
    </>
  );
};

export default Input;
