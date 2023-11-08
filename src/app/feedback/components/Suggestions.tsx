'use client';
import { useSortedFeedbackContext } from '@/state/sortedFeedback';
import NoFeedback from '../../../components/NoFeedback';
import FeedbackCard from './FeedbackCard';
import LoadingSpinner from '../../../components/LoadingSpinner';
import { useFeedbackContext } from '@/state/feedback';

const Suggestions = () => {
  const { sortedFeedbacks } = useSortedFeedbackContext();
  const { feedbacks, loading } = useFeedbackContext();

  if (!feedbacks?.length) {
    return (
      <div className="flex h-screen items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10 p-10 md:px-0 md:py-5">
      {sortedFeedbacks && sortedFeedbacks.length !== 0 ? (
        sortedFeedbacks?.map((sortedFeedback) => {
          return (
            <FeedbackCard key={sortedFeedback.id} feedback={sortedFeedback} />
          );
        })
      ) : (
        <NoFeedback />
      )}
    </div>
  );
};

export default Suggestions;
