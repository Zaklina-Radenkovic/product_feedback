import { DocumentData, collection, getDocs } from "firebase/firestore";
import {
  db,
  addCollectionAndDocuments,
  getFeedbacksAndDocuments,
} from "@/lib/firebase";
import Sidebar from "@/components/Sidebar";
import Feedbacks from "@/components/feedbacks/Feedbacks";
import { Feedback } from "@/types/models";

export default async function Home() {
  const feedbackData = await getDocs(collection(db, "feedbacks"));
  const productFeedbacks: any = feedbackData.docs.map((feedback) => {
    return {
      ...feedback.data(),
      id: feedback.id,
    };
  });
  // console.log(productFeedbacks);
  return (
    <div className="container flex gap-x-8">
      <Sidebar productFeedbacks={productFeedbacks} />
      <main className="basis-3/4">
        <Feedbacks productFeedbacks={productFeedbacks} />
      </main>
    </div>
  );
}
