"use client";
import { useRouter } from "next/navigation";
import GoBackButton from "@/components/button/GoBackButton";

import { useState } from "react";
import Form from "@/components/form/Form";
import { addDocument } from "@/lib/firebase";
import AddFeedback from "@/components/feedbacks/AddFeedback";

const page = () => {
  const router = useRouter();
  const [submitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({
    title: "",
    category: "",
    description: "",
  });

  // const createFeedback = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
  //   const data = {
  //     title: feedback?.title,
  //     category: feedback?.category,
  //     description: feedback?.description,
  //   };

  //   try {
  //     await addDocument(data);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  //   console.log("test");
  //   setFeedback({ title: "", category: "", description: "" });
  // };

  return (
    <div className="w-[490px] mx-auto text-sm/3 tracking-tight">
      <GoBackButton stroke="blue" onClick={() => router.back()} />
      <Form
        submitting={submitting}
        type="new"
        title="Create New Feedback"
        // handleSubmit={createFeedback}
        feedback={feedback}
        setFeedback={setFeedback}
      />
      {/* <AddFeedback /> */}
    </div>
  );
};

export default page;
