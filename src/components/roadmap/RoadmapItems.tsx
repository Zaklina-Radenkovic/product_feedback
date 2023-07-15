"use client";
import { useFeedbackContext } from "../../state/feedback";
import RoadmapItem from "./RoadmapItem";

const RoadmapItems = () => {
  const { plannedFeedbacks, inProgressFeedbacks, liveFeedbacks } =
    useFeedbackContext();

  return (
    <div className="roadmap">
      <div>
        <h3 className="font-bold text-secondary">
          Planned ({plannedFeedbacks.length})
        </h3>
        <p>Ideas prioritized for research</p>
        {plannedFeedbacks.map((item) => {
          return <RoadmapItem key={item.id} item={item} />;
        })}
      </div>
      <div>
        <h3 className="font-bold text-secondary">
          In-progress ({inProgressFeedbacks.length})
        </h3>
        <p>Ideas prioritized for research</p>
        {inProgressFeedbacks.map((item) => (
          <RoadmapItem key={item.id} item={item} />
        ))}
      </div>
      <div>
        <h3 className="font-bold text-secondary">
          Live ({liveFeedbacks.length})
        </h3>
        <p>Ideas prioritized for research</p>
        {liveFeedbacks.map((item) => (
          <RoadmapItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default RoadmapItems;
