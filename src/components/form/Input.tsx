import { ChangeEvent, ChangeEventHandler, FC, useState } from 'react';

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
      {type === 'text' && (
        <>
          <label className="pb-5">{label}</label>
          <input
            type={type}
            value={value}
            onChange={onChange}
            disabled={disabled}
            className="mb-6 rounded-lg bg-gray-light px-2.5 py-3 focus:outline-1 focus:outline-primary sm:px-5"
          />
        </>
      )}

      {type === 'dropdown' && (
        <div>
          <label className="block pb-5" htmlFor="search">
            {label}
          </label>

          <select
            onChange={onChange}
            value={value}
            // type={type}
            id="search"
            className="mb-6 w-full rounded-lg bg-gray-light px-2.5 py-3 focus:outline-1 focus:outline-primary sm:px-5"
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

      {type === 'textarea' && (
        <>
          <label className="pb-5 leading-4">{label}</label>
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
            className="text-gray-900 mb-[1.87rem] block w-full rounded-lg bg-gray-light p-2.5 text-sm focus:outline-1  focus:outline-primary sm:p-5"
            // placeholder="Type your comment here..."
          ></textarea>
        </>
      )}
      {/* {error && <p className="error">Input filed can't be empty!</p>} */}
    </>
  );
};

export default Input;
