import { FC, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "@/components/button/Button";
import ButtonFeedback from "@/components/button/ButtonFeedback";
import InputGroup from "./InputGroup";
import { Feedback, iFeedbackToAdd } from "@/types/models";
import Link from "next/link";
import { useFeedbackContext } from "@/state/feedback";

const categorySelections = ["Feature", "UI", "UX", "Enhancement", "Bug"];
const statusSelections = ["Suggestion", "Planned", "In-Progress", "Live"];

interface FormProps {
  type: React.JSX.Element | null | string;
  title: string;
  currentFeedback: Feedback | undefined;
  submitting: boolean;
  variant: string;
  onDelete: () => Promise<void>;
  onSubmit: (data: iFeedbackToAdd) => Promise<void>;
}

const Form: FC<FormProps> = ({
  type,
  title,
  currentFeedback,
  submitting,
  variant,
  onSubmit,
  onDelete,
}) => {
  const [feedbackTitle, setFeedbackTitle] = useState(
    currentFeedback ? currentFeedback.title : ""
  );
  const [category, setCategory] = useState(
    currentFeedback ? currentFeedback.category : ""
  );
  const [status, setStatus] = useState(
    currentFeedback ? currentFeedback.status : "suggestion"
  );
  const [description, setDescription] = useState(
    currentFeedback ? currentFeedback.description : ""
  );

  const router = useRouter();

  // const editHandler = async () => {
  //   try {
  //     const feedback = await getDocument(feedbackId);

  //     if (feedback) {
  //       setFeedbackTitle(feedback?.title);
  //       setCategory(feedback?.category);
  //       setStatus(feedback.status);
  //       setDescription(feedback.description);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // useEffect(() => {
  //   if (feedbackId) editHandler();
  // }, [feedbackId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data: iFeedbackToAdd = {
      title: feedbackTitle,
      category: category.toLowerCase(),
      description: description,
      status: status.toLowerCase(),
    };

    onSubmit(data);

    setCategory("");
    setFeedbackTitle("");
    setDescription("");
    setStatus("");
  };

  return (
    <div className="box mt-16 pt-[3.75rem] pl-10 pr-9 pb-9 relative">
      <Image
        src={`../../../../icon-${variant}-feedback.svg`}
        alt={`${type}-icon`}
        className="icon"
        width={40}
        height={40}
      />
      <h2 className="pb-20 text-secondary font-bold">
        {title || `Editing '${currentFeedback?.title}'`}
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <InputGroup
          value={feedbackTitle}
          title="Feedback title"
          type="text"
          label="Add a short, descriptive headline"
          onChange={(e) => setFeedbackTitle(e.target.value)}
        />
        <InputGroup
          value={
            category.length === 2
              ? category.toUpperCase()
              : category.charAt(0).toUpperCase() + category.slice(1)
          }
          type="dropdown"
          title="Category"
          label="Choose a category for your feedback"
          dropdownSelections={categorySelections}
          onChange={(e) => setCategory(e.target.value)}
        />

        <InputGroup
          value={status.replace(/(^\w|-\w)/g, (s: string) => s.toUpperCase())}
          type="dropdown"
          title="Update status"
          label="Change feature state"
          dropdownSelections={statusSelections}
          onChange={(e) => setStatus(e.target.value)}
        />

        <InputGroup
          value={description}
          type="textarea"
          title="Feedback detail"
          label="Include any specific comments on what should be improved, added, etc."
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="flex items-center justify-between">
          {variant === "edit" ? (
            <Button className="button bg-red  hover:bg-red" onClick={onDelete}>
              Delete
            </Button>
          ) : null}
          <div className="ml-auto">
            <Link href={"/"}>
              <Button className="button bg-secondary mr-3  hover:bg-secondary ">
                Cancel
              </Button>
            </Link>
            <ButtonFeedback
              disabled={submitting}
              className="button-sbm"
              type="submit"
            >
              Save Changes
            </ButtonFeedback>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
