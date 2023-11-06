'use client';
import { useFeedbackContext } from '@/state/feedback';
import Button from './button/Button';
import { useSortedFeedbackContext } from '@/state/sortedFeedback';

const CategoriesMenu = () => {
  const { loading } = useFeedbackContext();
  const { setCategory } = useSortedFeedbackContext();

  const filterTasks = (event: React.BaseSyntheticEvent) => {
    setCategory(event.currentTarget.dataset['filter']);
  };

  return (
    <div
      className={`box flex flex-wrap items-center gap-x-2 gap-y-3 md:w-full  xl:my-[25px] ${
        !loading ? 'blur-[2px]' : 'blur-none'
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
        className="button-category"
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
