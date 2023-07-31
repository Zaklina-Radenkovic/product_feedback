"use client";
import Link from "next/link";
import { useFeedbackContext } from "../../state/feedback";

const RoadmapMenu = () => {
  const { plannedFeedbacks, inProgressFeedbacks, liveFeedbacks } =
    useFeedbackContext();
  // console.log(inProgressFeedbacks);
  return (
    <div className="bg-white p-[25px] pb-[30px] rounded-lg flex flex-col">
      <div className="flex justify-between items-center gap-2 pb-6">
        <h3 className="font-bold text-secondary">Roadmap</h3>
        <Link
          href="/roadmap"
          className="text-xs/3 underline text-primary hover:text-primary/75 font-semibold hover:transition"
        >
          View
        </Link>
      </div>
      <div className="grid grid-cols-2 grid-rows-3 justify-items-start">
        <div className="flex pb-3">
          <span
            className={`roadmap-tag ${plannedFeedbacks?.reduce(
              (acc, item) => item.status.toLowerCase(),
              []
            )}`}
          ></span>
          <p>{plannedFeedbacks?.reduce((acc, item) => item.status, [])}</p>
        </div>
        <span className="roadmap-span">{plannedFeedbacks?.length}</span>
        <div className=" flex pb-3">
          <span
            className={`roadmap-tag ${inProgressFeedbacks?.reduce(
              (acc, item) => item.status.toLowerCase(),
              []
            )}`}
          ></span>
          <p>{inProgressFeedbacks?.reduce((acc, item) => item.status, [])}</p>
        </div>
        <span className="roadmap-span">{inProgressFeedbacks?.length}</span>
        <div className=" flex self-baseline">
          <span
            className={`roadmap-tag ${liveFeedbacks?.reduce(
              (acc, item) => item.status.toLowerCase(),
              []
            )}`}
          ></span>
          <p className="self-center">
            {liveFeedbacks?.reduce((acc, item) => item.status, [])}
          </p>
        </div>
        <span className="roadmap-span">{liveFeedbacks?.length}</span>
      </div>
    </div>
  );
};

export default RoadmapMenu;
