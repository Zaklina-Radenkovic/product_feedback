import Image from "next/image";
import emptyIllustration from "../../public/assets/images/illustration-empty.svg";
import Button from "./button/Button";

const NoSuggestion = () => {
  return (
    <div className="grid py-28 content-center justify-items-center suggestion">
      <Image
        priority
        src={emptyIllustration}
        alt="Detective looking through magnifying glass indicating no feedback (icon)"
        className="inline-block self-center justify-self-center pb-8"
      />
      <h1 className="text-secondary pb-4 font-bold">
        There is no feedback yet.
      </h1>
      <p className="pb-12 text-center">
        Got a suggestion? Found a bug that needs to be squashed? <br />
        We love hearing about new ideas to improve our app.
      </p>
      <Button className="button-feedback">+ Add feedback</Button>
    </div>
  );
};

export default NoSuggestion;
