import React from "react";

const RoadmapItem = ({ item }) => {
  console.log(item.color);
  const bgColor = {
    planned: item.color,
    live: item.color,
  };
  return (
    <div className="roadmap-item bgColor[item.color]">
      <div className="roadmap-item-overlay">
        <span className="roadmap-tag planned"></span>
        <p>Planned</p>
        <h3>One-click</h3>
        <p>Add ability</p>
        <p>Category</p>
        <p>Upvotes</p>
        <p>message</p>
      </div>
    </div>
  );
};

export default RoadmapItem;
