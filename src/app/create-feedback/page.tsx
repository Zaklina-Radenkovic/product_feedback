"use client";
import { useRouter } from "next/navigation";
import GoBackButton from "@/components/button/GoBackButton";
import { addDocument } from "@/lib/firebase";
import EditForm from "@/components/form/Form";
import { useFeedbackContext } from "@/state/feedback";
import { nanoid } from "nanoid";

const page = () => {
  const router = useRouter();
  const { setFeedbacks } = useFeedbackContext();

  const handleSubmitForm = async (data) => {
    const newFeedback: iFeedbackToAdd = {
      ...data,
      upvotes: 0,
      comments: [],
      id: nanoid(),
    };

    try {
      await addDocument(newFeedback.id, newFeedback);
      setFeedbacks((prev) => {
        return [...prev, newFeedback];
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[490px] mx-auto text-sm/3 tracking-tight">
      <GoBackButton stroke="blue" onClick={() => router.back()} />
      <EditForm
        variant="new"
        onSubmit={handleSubmitForm}
        title="Create New Feedback"
      />
    </div>
  );
};

export default page;
