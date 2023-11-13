import RoadmapItem from './RoadmapItem';
import { Feedback } from '@/types/models';

type RoadmapListItems = {
  feedbacksList: Feedback[];
  name: string;
};

const RoadmapListItems = ({ feedbacksList, name }: RoadmapListItems) => {
  return (
    <>
      {feedbacksList.map((feedback: Feedback) => (
        <RoadmapItem key={feedback.id} feedback={feedback} name={name} />
      ))}
    </>
  );
};

export default RoadmapListItems;
