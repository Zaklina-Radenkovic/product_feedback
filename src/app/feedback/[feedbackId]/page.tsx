'use client';
import Link from 'next/link';
import { notFound, useRouter } from 'next/navigation';
import ButtonFeedback from '@/components/button/ButtonFeedback';
import GoBackButton from '@/components/button/GoBackButton';
import FeedbackCard from '@/app/feedback/components/FeedbackCard';

import Comments from '@/components/comments/Comments';
import CommentForm from '@/components/form/CommentForm';
import { useCommentsContext } from '@/state/comments';

const page = () => {
  const router = useRouter();
  const { currentFeedback, feedbackId } = useCommentsContext();

  if (!currentFeedback) {
    notFound();
  }

  return (
    <div className="inner-container">
      <div className="mx-auto tracking-tight sm:w-[490px] md:w-[730px]">
        <header className="flex flex-row items-center justify-between">
          <GoBackButton stroke="blue" onClick={() => router.push('/')} />
          <Link href={`${feedbackId}/edit`}>
            <ButtonFeedback className="button-feedback bg-primary px-4 hover:bg-primary sm:px-[1.875rem]">
              Edit Feedback
            </ButtonFeedback>
          </Link>
        </header>
        <div className="pb-6 pt-10">
          <FeedbackCard feedback={currentFeedback} name={''} />
        </div>
        {currentFeedback.comments?.length >= 1 && <Comments />}
        <CommentForm />
      </div>
    </div>
  );
};

export default page;
