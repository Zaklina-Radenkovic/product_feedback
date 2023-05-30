"use client";
import { useEffect, useState } from "react";
import { DocumentData, collection, getDocs } from "firebase/firestore";
import { PRODUCT_REQUESTS } from "@/_fake-api__/feedbacks";
import Sidebar from "@/components/Sidebar";
import {
  db,
  addCollectionAndDocuments,
  getFeedbacksAndDocuments,
} from "@/lib/firebase";
import Feedbacks from "@/components/feedbacks/Feedbacks";
import { Feedback } from "@/types/models";
import { GetStaticProps, InferGetStaticPropsType } from "next";

export default function Home({
  documentMap,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [productFeedbacks, setproductFeedbacks] = useState<Feedback[]>([]);
  console.log(documentMap);
  // useEffect(() => {
  //   addCollectionAndDocuments("feedbacks", PRODUCT_REQUESTS);
  // }, []);

  useEffect(() => {
    const getFeedbacksMap = async () => {
      const data: DocumentData = await getFeedbacksAndDocuments("feedbacks");

      const feedbacksArr = data.reduce((acc: {}[], feedback: Feedback) => {
        const productFeedback = {
          ...feedback,
          category:
            feedback.category.charAt(0).toUpperCase() +
            feedback.category.slice(1),
          description: feedback.description,
          id: feedback.id,
          status: feedback.status,
          title: feedback.title,
          upvotes: feedback.upvotes,
          comments: feedback.comments,
        };
        acc.push(productFeedback);
        return acc;
      }, []);
      // console.log(feedbacksArr);
      setproductFeedbacks(feedbacksArr);
    };
    getFeedbacksMap();
  }, []);

  return (
    <div className="container flex gap-x-8">
      <Sidebar />
      <main className="basis-3/4">
        <Feedbacks productFeedbacks={productFeedbacks} />
      </main>
    </div>
  );
}

//@ts-ignore
export const getStaticProps: GetStaticProps<{
  feedbackData: Feedback[];
}> = async () => {
  const feedbackData = await getDocs(collection(db, "feedbacks"));
  const documentMap = feedbackData.docs;
  console.log("here..", documentMap);
  return {
    props: { documentMap },
  };
};
