"use client";
import ButtonFeedback from "@/components/button/ButtonFeedback";
import GoBackButton from "@/components/button/GoBackButton";
import SuggestionItem from "@/components/feedbacks/FeedbackCard";
import { useFeedbackContext } from "@/state/feedback";
import { SortedFeedbackProvider } from "@/state/sortedFeedback";
import { useParams } from "next/navigation";

const page = () => {
  const { feedbacks } = useFeedbackContext();
  const params = useParams();
  const { suggestionId } = params;
  console.log(suggestionId);
  return (
    <>
      <header className="flex flex-row justify-between items-center">
        <GoBackButton className=" text-gray " stroke="blue" />
        {/* {suggestionId} */}
        <ButtonFeedback className="button-edit">Edit Feedback</ButtonFeedback>
      </header>
      <SuggestionItem
        sortedFeedback={{
          id: suggestionId,
          title: "",
          category: "",
          upvotes: 0,
          status: "",
          description: "",
          comments: [],
        }}
      />
      <div>Comments</div>
      <div>Add Comment</div>
    </>
  );
};

export default page;
