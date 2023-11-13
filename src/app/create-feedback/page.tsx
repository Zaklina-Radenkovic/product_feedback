'use client';
import { useRouter } from 'next/navigation';
import { nanoid } from 'nanoid';
import GoBackButton from '@/components/button/GoBackButton';
import { addDocument } from '@/lib/firebase';
import Form from '@/components/form/Form';
import { useFeedbackContext } from '@/state/feedback';
import { iFeedbackToAdd } from '@/types/models';

const page = () => {
  const router = useRouter();
  const { setFeedbacks } = useFeedbackContext();

  const handleSubmitForm = async (data: iFeedbackToAdd) => {
    const newFeedback: iFeedbackToAdd = {
      ...data,
      upvotes: 0,
      status: 'suggestion',
      comments: [],
      id: nanoid(),
    };

    try {
      await addDocument(newFeedback.id, newFeedback);
      setFeedbacks((prev) => {
        return [...prev, newFeedback];
      });
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="inner-container">
      <div className="mx-auto tracking-tight sm:w-[490px]">
        <GoBackButton stroke="blue" onClick={() => router.back()} />
        <Form
          variant="new"
          onSubmit={handleSubmitForm}
          title="Create New Feedback"
          type={null}
          currentFeedback={{
            id: null,
            title: '',
            category: '',
            upvotes: 0,
            status: '',
            description: '',
            color: undefined,
            comments: [],
            upvoted: undefined,
          }}
          submitting={false}
          onDelete={function (): Promise<void> {
            throw new Error('Function not implemented.');
          }}
        />
      </div>
    </div>
  );
};

export default page;
