import { useState } from "react";
import ButtonFeedback from "../button/ButtonFeedback";

const TextForm = () => {
  const [characterLimit, setCharacterLimit] = useState(255);
  const [text, setText] = useState("");
  const textHandler = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="px-[1.87rem] pt-[1.56rem] pb-[1.87rem] box">
      <h3 className="pb-[1.87rem] text-secondary font-bold">Add Comment</h3>
      <textarea
        onChange={textHandler}
        id="message"
        rows="3"
        value={text}
        maxLength={characterLimit}
        className="block p-5 w-full text-sm text-gray-900 bg-gray-light rounded-lg mb-[1.87rem]  focus:outline-primary focus:outline-1"
        placeholder="Type your comment here..."
      ></textarea>
      <div className="flex flex-row items-center justify-between">
        <span>{characterLimit - text.length} charachters left</span>
        <ButtonFeedback
          onClick={() => {}}
          className="button-feedback px-[1.875rem]"
        >
          Post Comment
        </ButtonFeedback>
      </div>
    </div>
  );
};

export default TextForm;
