"use client";
import { useFeedbackContext } from "@/state/feedback";
import Button from "./button/Button";

const CategoriesMenu = () => {
  const { setCategory } = useFeedbackContext();

  const filterTasks = (event: React.BaseSyntheticEvent) => {
    setCategory(event.currentTarget.dataset["filter"]);
  };

  return (
    <div className="bg-white p-6 my-[25px] rounded-lg flex flex-wrap gap-x-2 gap-y-3">
      <Button
        className="button-category"
        data-filter="all"
        onClick={filterTasks}
      >
        All
      </Button>
      <Button
        className="button-category"
        data-filter="UI"
        onClick={filterTasks}
      >
        UI
      </Button>
      <Button
        className="button-category"
        data-filter="UX"
        onClick={filterTasks}
      >
        UX
      </Button>
      <Button
        className="button-category"
        data-filter="Enhancement"
        onClick={filterTasks}
      >
        Enhancement
      </Button>
      <Button
        className="button-category ml-3"
        data-filter="bug"
        onClick={filterTasks}
      >
        Bug
      </Button>
      <Button
        className="button-category"
        data-filter="feature"
        onClick={filterTasks}
      >
        Feature
      </Button>
    </div>
  );
};

export default CategoriesMenu;
