"use client";

import RoadmapItem from "./RoadmapItem";

const RoadmapListItems = ({ feedbacksList }) => {
  return (
    <>
      {feedbacksList.map((feedback) => (
        <RoadmapItem key={feedback.id} feedback={feedback} />
      ))}
    </>
  );
};

export default RoadmapListItems;
