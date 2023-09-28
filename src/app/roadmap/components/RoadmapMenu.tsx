"use client";
import Link from "next/link";
import { useFeedbackContext } from "../../../state/feedback";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useStatusFeedbacks } from "@/hooks/useStatusFeedbacks";
import { useEffect } from "react";

type plannedFeedbacksType =
  | {
      status: string;
      color: string;
      id: string | null;
      title: string;
      category: string;
      upvotes: number;
      description: string;
      // comments: CommentType[];
    }[]
  | null;

const RoadmapMenu = () => {
  const { loading } = useFeedbackContext();
  const { plannedFeedbacks, inProgressFeedbacks, liveFeedbacks } =
    useStatusFeedbacks();

  const loader = (
    <div className="flex items-center justify-center">
      {" "}
      <LoadingSpinner />
    </div>
  );

  return (
    <div className="box p-[25px] pb-[30px] flex flex-col">
      <div className="flex justify-between items-center gap-2 pb-6">
        <h3 className="font-bold text-secondary">Roadmap</h3>
        <Link
          href={!loading ? {} : "/roadmap"}
          className={`text-xs/3 underline  
            ${
              !loading ? "text-primary/50" : "text-primary"
            } hover:text-primary/75 font-semibold hover:transition`}
        >
          View
        </Link>
      </div>
      {!plannedFeedbacks?.length ||
      !inProgressFeedbacks?.length ||
      !liveFeedbacks?.length ? (
        loader
      ) : (
        <div className="grid grid-cols-2 grid-rows-3 justify-items-start">
          <div className="flex pb-3">
            <span
              className={`roadmap-tag ${plannedFeedbacks?.reduce(
                (_, item) => item.status.toLowerCase(),
                " "
              )}`}
            ></span>
            <p>{plannedFeedbacks?.reduce((_, item) => item.status, " ")}</p>
          </div>
          <span className="roadmap-span">{plannedFeedbacks?.length}</span>

          <div className="flex pb-3">
            <span
              className={`roadmap-tag ${inProgressFeedbacks?.reduce(
                (_, item) => item.status.toLowerCase(),
                " "
              )}`}
            ></span>
            <p>{inProgressFeedbacks?.reduce((_, item) => item.status, " ")}</p>
          </div>
          <span className="roadmap-span">{inProgressFeedbacks?.length}</span>

          <div className="flex self-baseline">
            <span
              className={`roadmap-tag ${liveFeedbacks?.reduce(
                (_, item) => item.status.toLowerCase(),
                " "
              )}`}
            ></span>
            <p className="self-center">
              {liveFeedbacks?.reduce((_, item) => item.status, " ")}
            </p>
          </div>
          <span className="roadmap-span">{liveFeedbacks?.length}</span>
        </div>
      )}
    </div>
  );
};

export default RoadmapMenu;
