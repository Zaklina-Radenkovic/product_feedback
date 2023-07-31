"use client";
import Image from "next/image";
import editFeedbackIcon from "../../../../../public/icon-edit-feedback.svg";
import Button from "@/components/button/Button";
import ButtonFeedback from "@/components/button/ButtonFeedback";
import GoBackButton from "@/components/button/GoBackButton";
import { useFeedbackContext } from "@/state/feedback";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

const page = () => {
  const { feedbacks } = useFeedbackContext();

  const params = useParams();
  const { feedbackId } = params;

  const currentFeedback = feedbacks?.find(
    (feedback) => feedback.id === feedbackId
  );
  const router = useRouter();

  return (
    <div className="w-[490px] mx-auto">
      <GoBackButton
        className=" text-gray"
        stroke="blue"
        onClick={() => router.back()}
      />
      <div className="bg-white text-gray mt-16 pt-14 pl-10 pr-9 pb-9 relative">
        <Image src={editFeedbackIcon} alt="edit icon" className="edit-icon" />
        <h2 className="pb-[80px]">Editing '{currentFeedback?.title}'</h2>
        <form action="" className="flex flex-col">
          <h5 className="pb-[10px]">Feedback title</h5>
          <label htmlFor="" className="pb-[20px]">
            Add a short, descriptive headline
          </label>
          <input
            type="text"
            placeholder={currentFeedback?.title}
            className="py-3 pl-5 bg-gray-light rounded-lg mb-6"
          />

          <h5 className="pb-[10px]">Category</h5>
          <label htmlFor="" className="pb-[20px]">
            Choose a category for your feedback
          </label>
          <input
            type="text"
            placeholder={currentFeedback?.category}
            className="py-3 pl-5 bg-gray-light rounded-lg mb-6"
          />

          <h5 className="pb-[10px]">Update status</h5>
          <label htmlFor="" className="pb-[20px]">
            Change feature state
          </label>
          <input
            type="text"
            placeholder={currentFeedback?.status}
            className="py-3 pl-5 bg-gray-light rounded-lg mb-6"
          />

          <h5 className="pb-[10px]">Feedback detail</h5>
          <label htmlFor="" className="pb-[20px]">
            Include any specific comments on what should be improved, added,
            etc.
          </label>
          <input
            type="text"
            placeholder={currentFeedback?.description}
            className="py-3 pl-5 bg-gray-light rounded-lg mb-6"
          />
        </form>
        <div className="flex items-center justify-between">
          <Button className="py-3 px-5 bg-red text-white rounded-lg">
            Delete
          </Button>
          <div className="">
            <Button className="py-3 px-5 bg-gray mr-3 text-white rounded-lg">
              Cancel
            </Button>
            <ButtonFeedback className="button-edit" onClick={() => {}}>
              Save Changes
            </ButtonFeedback>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
