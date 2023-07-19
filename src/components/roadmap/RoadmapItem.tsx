"use client";
import Button from "../button/Button";

const RoadmapItem = ({ feedback }: any) => {
  const { status, title, description, category, upvotes, comments, color } =
    feedback;
  console.log(feedback);
  // let statusCapitalize = status.split(" ");
  // for (let i = 0; i < statusCapitalize.length; i++) {
  //   statusCapitalize[i] =
  //     statusCapitalize[i].charAt(0) + statusCapitalize[i].slice(1);
  // }
  // statusCapitalize = statusCapitalize.join(" ");
  // console.log(statusCapitalize);
  return (
    <div className={`bg-white p-8 mb-5 border-t-4 border-${color}`}>
      <div className="flex py-7">
        <span className={`roadmap-tag ${status}`}></span>
        <p className="pt-7.5">{status.toUpperCase()}</p>
      </div>
      <h3 className="text-blue font-bold pb-3">{title}</h3>
      <p className="leading-5 pb-5">{description}</p>
      <Button className="button-category">{category}</Button>

      <p>{upvotes}</p>
      <p>{comments?.length}</p>
    </div>
  );
};

export default RoadmapItem;
