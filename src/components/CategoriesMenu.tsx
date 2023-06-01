import { useFeedbackContext } from "@/state/feedback";
import Button from "./button/Button";
import { iProductFeedbacks } from "@/types/models";

const CategoriesMenu = () => {
  // const [feedbacks] = useFeedbackContext();
  return (
    <div className="bg-white p-5 my-5 rounded-lg flex flex-wrap gap-x-2 gap-y-2.5">
      <Button className="button-category">All</Button>
      <Button className="button-category">UI</Button>
      <Button className="button-category">UX</Button>
      <Button className="button-category">Enhancement</Button>
      <Button className="button-category">Feature</Button>
      <Button className="button-category">Bug</Button>
    </div>
  );
};

export default CategoriesMenu;
