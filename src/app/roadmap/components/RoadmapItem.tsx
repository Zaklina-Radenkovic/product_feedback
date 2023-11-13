import { Feedback } from '@/types/models';
import FeedbackCard from '@/app/feedback/components/FeedbackCard';

interface RoadmapItemProps {
  feedback: Feedback;
  name: string;
}

type BorderColor = {
  'orange-planned': string;
  'blue-live': string;
  tertiary: string;
};

const RoadmapItem = ({ feedback, name }: RoadmapItemProps) => {
  const borderColor: BorderColor = {
    'orange-planned': 'border-orange-planned',
    'blue-live': 'border-blue-live',
    tertiary: 'border-tertiary',
  };

  return (
    <div
      className={`roadmap-item border-t-4 ${
        borderColor[feedback.color as keyof BorderColor]
      }`}
    >
      <div className="flex pb-4">
        <span className={`roadmap-tag ${feedback.status.toLowerCase()}`}></span>
        <p className="pt-7.5">{name}</p>
      </div>

      <FeedbackCard feedback={feedback} name={name} />
    </div>
  );
};

export default RoadmapItem;
