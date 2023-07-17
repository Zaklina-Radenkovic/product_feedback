import Image from "next/image";
import Button from "@/components/button/Button";
import ButtonFeedback from "@/components/button/ButtonFeedback";
import arrowIconLeft from "../../../public/icon-arrow-left.svg";

const RoadmapHeader = () => {
  return (
    <header className="navbar p-[1.875rem] font-bold mb-0">
      <div className="grid grid-rows-2 gap-2.5">
        <div className="flex items-center">
          <Image
            priority
            src={arrowIconLeft}
            alt="icon"
            className="inline-block mr-3.5"
          />
          <Button className="text-xs/3 hover:underline">Go Back</Button>
        </div>
        <h2>Roadmap</h2>
      </div>
      <ButtonFeedback />
    </header>
  );
};

export default RoadmapHeader;
