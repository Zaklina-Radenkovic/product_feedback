// "use client";
import { DocumentData, collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

import Feedbacks from "@/components/feedbacks/Feedbacks";

export default async function Home() {
  //getting feedbacks from Firebase
  // const feedbackData = await getDocs(collection(db, "feedbacks"));
  // const productFeedbacks: any = feedbackData.docs.map((feedback) => {
  //   return {
  //     ...feedback.data(),
  //     id: feedback.id,
  //   };
  // });
  // console.log(productFeedbacks);

  return (
    <div className="container flex gap-x-[30px] mx-auto">
      <Sidebar />
      <main className="basis-3/4">
        <Navbar />
        <Feedbacks />
      </main>
    </div>
  );
}
