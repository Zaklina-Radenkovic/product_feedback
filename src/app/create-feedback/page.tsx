"use client";
import { useRouter } from "next/navigation";
import GoBackButton from "@/components/button/GoBackButton";
import AddFeedback from "@/components/feedbacks/AddFeedback";
import React from "react";
import Form from "@/components/form/Form";

const page = () => {
  const router = useRouter();

  return (
    <div className="w-[490px] mx-auto text-sm/3 tracking-tight">
      <GoBackButton stroke="blue" onClick={() => router.back()} />

      <Form type="new" title="Create New Feedback" />
    </div>
  );
};

export default page;
