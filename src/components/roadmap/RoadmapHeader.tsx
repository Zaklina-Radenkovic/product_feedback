import Image from "next/image";
import Button from "@/components/button/Button";
import ButtonFeedback from "@/components/button/ButtonFeedback";
import arrowIconLeft from "../../../public/icon-arrow-left.svg";

const RoadmapHeader = () => {
  return (
    <header className="navbar p-7 text-white font-bold items-center">
      <div className="grid grid-rows-2 gap-2">
        <div className="flex items-center">
          <Image
            priority
            src={arrowIconLeft}
            alt="icon"
            className="inline-block mr-3.5"
          />
          <Button className="text-sm">Go Back</Button>
        </div>
        <h1>Roadmap</h1>
      </div>
      <ButtonFeedback />
    </header>
  );
};

export default RoadmapHeader;
