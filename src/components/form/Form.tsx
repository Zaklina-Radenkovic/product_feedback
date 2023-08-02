import { FC } from "react";
import Image from "next/image";
import Button from "@/components/button/Button";
import ButtonFeedback from "@/components/button/ButtonFeedback";
import InputGroup from "./InputGroup";
import { useFeedbackContext } from "@/state/feedback";
import { useParams } from "next/navigation";

interface FormProps {
  type: React.JSX.Element | null | string;
  //   src: string;
  title: string;
}

const Form: FC<FormProps> = ({ type, title }) => {
  const { feedbacks } = useFeedbackContext();

  const params = useParams();
  const { feedbackId } = params;

  const currentFeedback = feedbacks?.find(
    (feedback) => feedback.id === feedbackId
  );

  return (
    <div className="box mt-16 pt-[3.75rem] pl-10 pr-9 pb-9 relative">
      <Image
        src={`../../../../icon-${type}-feedback.svg`}
        alt={`${type}-icon`}
        className="icon"
        width={40}
        height={40}
      />
      <h2 className="pb-20 text-secondary font-bold">
        {title || `Editing '${currentFeedback?.title}'`}
      </h2>
      <form action="" className="flex flex-col">
        <InputGroup
          title="Feedback title"
          type="text"
          placeholder={currentFeedback?.title}
          label="Add a short, descriptive headline"
        />
        <InputGroup
          type="dropdown"
          title="Category"
          placeholder={currentFeedback?.category}
          label="Choose a category for your feedback"
        />
        {type === "edit" ? (
          <InputGroup
            type="dropdown"
            title="Update status"
            placeholder={currentFeedback?.status}
            label="Change feature state"
          />
        ) : null}
        <InputGroup
          type="textarea"
          title="Feedback detail"
          placeholder={currentFeedback?.description}
          label="Include any specific comments on what should be improved, added, etc."
        />
      </form>
      <div className="flex items-center justify-between">
        {type === "edit" ? (
          <Button className="button bg-red  hover:bg-red ">Delete</Button>
        ) : null}
        <div className="ml-auto">
          <Button className="button bg-secondary mr-3  hover:bg-secondary ">
            Cancel
          </Button>
          <ButtonFeedback onClick={() => {}} className="button-sbm">
            {type === "new" ? "Add Feedback" : "Save Changes"}
          </ButtonFeedback>
        </div>
      </div>
    </div>
  );
};

export default Form;
