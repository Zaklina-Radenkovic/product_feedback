import Image from "next/image";
import emptyIllustration from "../../public/assets/images/illustration-empty.svg";
import ButtonFeedback from "./button/ButtonFeedback";

const NoSuggestion = () => {
  return (
    <div className="grid py-28 content-center justify-items-center suggestion">
      <Image
        priority
        src={emptyIllustration}
        alt="Detective looking through magnifying glass indicating no feedback (icon)"
        className="inline-block self-center justify-self-center pb-8"
      />
      <h2 className="text-secondary pb-4 font-bold">
        There is no feedback yet.
      </h2>
      <p className="pb-12 text-center leading-5">
        Got a suggestion? Found a bug that needs to be squashed? <br />
        We love hearing about new ideas to improve our app.
      </p>
      <ButtonFeedback />
    </div>
  );
};

export default NoSuggestion;
