"use client";
import { useFeedbackContext } from "@/state/feedback";
import Button from "./button/Button";

const CategoriesMenu = () => {
  const { setCategory } = useFeedbackContext();

  const filterTasks = (event: React.BaseSyntheticEvent) => {
    setCategory(event.currentTarget.dataset["filter"]);
  };

  return (
    <div className="bg-white p-5 my-5 rounded-lg flex flex-wrap gap-x-2 gap-y-2.5">
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
        className="button-category"
        data-filter="feature"
        onClick={filterTasks}
      >
        Feature
      </Button>
      <Button
        className="button-category"
        data-filter="bug"
        onClick={filterTasks}
      >
        Bug
      </Button>
    </div>
  );
};

export default CategoriesMenu;
