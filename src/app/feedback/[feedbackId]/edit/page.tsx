'use client';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import GoBackButton from '@/components/button/GoBackButton';
import Form from '@/components/form/Form';
import { useFeedbackContext } from '@/state/feedback';
import {
  getFeedbacksAndDocuments,
  updateFeedback,
  deleteFeedback,
} from '@/lib/firebase';

const page = () => {
  const router = useRouter();
  const params = useParams();
  const { feedbackId } = params;
  const { feedbacks, setFeedbacks } = useFeedbackContext();
  const currentFeedback = feedbacks?.find(
    (feedback) => feedback.id === feedbackId,
  );

  const deleteHandler = async () => {
    await deleteFeedback(feedbackId as string);
    const feedbacks = await getFeedbacksAndDocuments('feedbacks');
    setFeedbacks(feedbacks);
    router.push('/');
  };

  const handleSubmitForm = async (editFeedback: {}) => {
    try {
      await updateFeedback(feedbackId as any, editFeedback);

      const feedbacks = await getFeedbacksAndDocuments('feedbacks');
      setFeedbacks(feedbacks);
      router.push(`/feedback/${feedbackId}`);
    } catch (error) {
      console.log(error);
    }
  };

  if (currentFeedback) {
    return (
      <div className="inner-container">
        <div className="mx-auto tracking-tight sm:w-[490px] md:w-[730px]">
          <GoBackButton
            stroke="blue"
            onClick={() => router.push(`/feedback/${feedbackId}`)}
          />

          <Form
            variant="edit"
            currentFeedback={currentFeedback}
            onSubmit={handleSubmitForm}
            onDelete={deleteHandler}
            type={null}
            title={''}
            submitting={false}
          />
        </div>
      </div>
    );
  }
};

export default page;
