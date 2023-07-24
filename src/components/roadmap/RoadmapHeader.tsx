import Link from "next/link";
import ButtonFeedback from "@/components/button/ButtonFeedback";
import GoBackButton from "../button/GoBackButton";

const RoadmapHeader = () => {
  return (
    <header className="navbar p-[1.875rem] font-bold mb-0">
      <div className="grid grid-rows-2 gap-2.5">
        <Link href="/">
          <GoBackButton className="text-white" stroke="#fff" />
        </Link>
        <h3>Roadmap</h3>
      </div>
      <ButtonFeedback> &#43; Add feedback </ButtonFeedback>
    </header>
  );
};

export default RoadmapHeader;
