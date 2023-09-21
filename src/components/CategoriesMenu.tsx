"use client";
import { useFeedbackContext } from "@/state/feedback";
import Button from "./button/Button";

const CategoriesMenu = () => {
  const { setCategory, loading } = useFeedbackContext();

  const filterTasks = (event: React.BaseSyntheticEvent) => {
    setCategory(event.currentTarget.dataset["filter"]);
  };

  return (
    <div
      className={`box p-6 my-[25px] flex flex-wrap gap-x-2 gap-y-3 ${
        !loading ? "blur-[2px]" : "blur-none"
      }`}
    >
      <Button
        className="button-category"
        data-filter="All"
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
        data-filter="Bug"
        onClick={filterTasks}
      >
        Bug
      </Button>
      <Button
        className="button-category"
        data-filter="Feature"
        onClick={filterTasks}
      >
        Feature
      </Button>
    </div>
  );
};

export default CategoriesMenu;
