"use client";
import { useFeedbackContext } from "../../state/feedback";
import RoadmapListItems from "./RoadmapListItems";

const Roadmap = () => {
  const { plannedFeedbacks, inProgressFeedbacks, liveFeedbacks } =
    useFeedbackContext();

  const roadmapData = [
    {
      id: 1,
      name: "Planned",
      description: "Ideas prioritized for research",
      color: "orange-planned",
      feedbacks: plannedFeedbacks,
    },
    {
      id: 2,
      name: "In-Progress",
      description: "Currently being developed",
      color: "blue-live",
      feedbacks: inProgressFeedbacks,
    },
    {
      id: 3,
      name: "Live",
      description: "Release features",
      color: "tertiary",
      feedbacks: liveFeedbacks,
    },
  ];

  return (
    <div className="roadmap">
      {roadmapData.map((data) => (
        <div key={data.id}>
          <h3 className="font-bold text-secondary mb-3.5">
            {data.name} ({data.feedbacks.length})
          </h3>
          <p className="mb-9">{data.description}</p>
          <RoadmapListItems
            key={data.id}
            feedbacksList={data.feedbacks}
            name={data.name}
          />
        </div>
      ))}
    </div>
  );
};

export default Roadmap;
