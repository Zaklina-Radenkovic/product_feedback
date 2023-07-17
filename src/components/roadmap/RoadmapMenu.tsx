"use client";
import Link from "next/link";
import { useFeedbackContext } from "../../state/feedback";
const RoadmapMenu = () => {
  const { plannedFeedbacks, inProgressFeedbacks, liveFeedbacks } =
    useFeedbackContext();
  console.log(plannedFeedbacks);
  return (
    <div className="bg-white p-[25px] pb-[30px] rounded-lg flex flex-col">
      <div className="flex justify-between items-center gap-2 pb-6">
        <h2 className="font-bold text-secondary">Roadmap</h2>
        <Link
          href="/roadmap"
          className="text-xs/3 underline text-primary hover:text-primary/75 font-semibold hover:transition"
        >
          View
        </Link>
      </div>
      <div className="grid grid-cols-2 grid-rows-3 justify-items-start">
        <div className="flex pb-3">
          <span className="roadmap-tag planned"></span>
          <p>Planned</p>
        </div>
        <span className="roadmap-span">{plannedFeedbacks.length}</span>
        <div className=" flex pb-3">
          <span className="roadmap-tag progress"></span>
          <p>In-progress</p>
        </div>
        <span className="roadmap-span">{inProgressFeedbacks.length}</span>
        <div className=" flex self-baseline">
          <span className="roadmap-tag live"></span>
          <p className="self-center">Live</p>
        </div>
        <span className="roadmap-span">{liveFeedbacks.length}</span>
      </div>
    </div>
  );
};

export default RoadmapMenu;
