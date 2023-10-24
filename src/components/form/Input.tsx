import { ChangeEvent, ChangeEventHandler, FC, useState } from "react";

interface InputProps {
  type: string;
  label: string | null;
  value: string;
  disabled?: boolean;
  onChange: any;
  dropdownSelections: string[];
}

const Input: FC<InputProps> = ({
  type,
  label,
  value,
  disabled,
  onChange,
  dropdownSelections,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = (e: { preventDefault: () => void }) => {
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
            value={value}
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
            // type={type}
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
