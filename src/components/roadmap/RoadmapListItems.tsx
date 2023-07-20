"use client";

import RoadmapItem from "./RoadmapItem";

const RoadmapListItems = ({ feedbacksList, name }) => {
  return (
    <>
      {feedbacksList.map((feedback) => (
        <RoadmapItem key={feedback.id} feedback={feedback} name={name} />
      ))}
    </>
  );
};

export default RoadmapListItems;
