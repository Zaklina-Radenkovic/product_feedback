// "use client";
import Link from 'next/link';
import Button from '../../../components/button/Button';
import ButtonVote from '../../../components/button/ButtonVote';
import CommentsIcon from '../../../components/comments/CommentsIcon';
import { Feedback } from '@/types/models';
import FeedbackCard from '@/app/feedback/components/FeedbackCard';

interface RoadmapItemProps {
  feedback: Feedback;
  name: string;
}

const RoadmapItem = ({ feedback, name }: RoadmapItemProps) => {
  const {
    status,
    title,
    description,
    category,
    upvotes,
    comments,
    color,
    id,
    upvoted,
  } = feedback;

  type BorderColor = {
    'orange-planned': string;
    'blue-live': string;
    tertiary: string;
  };

  const borderColor: BorderColor = {
    'orange-planned': 'border-orange-planned',
    'blue-live': 'border-blue-live',
    tertiary: 'border-tertiary',
  };

  return (
    <div
      className={`roadmap-item border-t-4 ${
        borderColor[color as keyof BorderColor]
      }`}
    >
      <div className="flex pb-4">
        <span className={`roadmap-tag ${status.toLowerCase()}`}></span>
        <p className="pt-7.5">{name}</p>
      </div>

      <FeedbackCard feedback={feedback} name={name} />
    </div>
  );
};

export default RoadmapItem;
