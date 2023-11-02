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
      <Link href={`/feedback/${id}`}>
        <h3 className="pb-3 font-bold text-secondary">{title}</h3>
      </Link>
      <p className="pb-5 leading-5">{description}</p>
      <Button className="button-category">{category}</Button>
      <div className="mt-3.5 flex flex-row items-center justify-between">
        <ButtonVote
          className="md:btn-upvote-x"
          onClick={() => {}}
          upvoted={upvoted}
        >
          {upvotes}
        </ButtonVote>
        <CommentsIcon
          className={`ml-1.5 font-bold ${
            !comments?.length ? 'text-secondary/50' : 'text-secondary'
          }`}
        >
          {comments?.length > 0 ? comments.length : 0}
        </CommentsIcon>
      </div>
      {/* <FeedbackCard feedback={feedback} /> */}
    </div>
  );
};

export default RoadmapItem;
