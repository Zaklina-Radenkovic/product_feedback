"use client";
import Button from "../button/Button";
import ButtonVote from "../button/ButtonVote";
import CommentsIcon from "../comments/CommentsIcon";

const RoadmapItem = ({ feedback, name }: any) => {
  const { status, title, description, category, upvotes, comments, color } =
    feedback;
  console.log(status);

  const borderColor = {
    "orange-planned": "border-orange-planned",
    "blue-live": "border-blue-live",
    tertiary: "border-tertiary",
  };
  // let statusCapitalize = status.split(" ");
  // for (let i = 0; i < statusCapitalize.length; i++) {
  //   statusCapitalize[i] =
  //     statusCapitalize[i].charAt(0) + statusCapitalize[i].slice(1);
  // }
  // statusCapitalize = statusCapitalize.join(" ");
  // console.log(statusCapitalize);
  return (
    <div className={`roadmap-item border-t-4 ${borderColor[color]}`}>
      <div className="flex pb-4">
        <span className={`roadmap-tag ${status.toLowerCase()}`}></span>
        <p className="pt-7.5">{name}</p>
      </div>
      <h3 className="text-blue font-bold pb-3">{title}</h3>
      <p className="leading-5 pb-5">{description}</p>
      <Button className="button-category">{category}</Button>
      <div className="flex flex-row justify-between items-center mt-3.5">
        <ButtonVote className="btn-upvote-x">{upvotes}</ButtonVote>
        <CommentsIcon
          className={`ml-1.5 font-bold ${
            !comments?.length ? "text-gray/75" : "text-secondary"
          }`}
        >
          {comments?.length > 0 ? comments.length : 0}
        </CommentsIcon>
      </div>
    </div>
  );
};

export default RoadmapItem;
