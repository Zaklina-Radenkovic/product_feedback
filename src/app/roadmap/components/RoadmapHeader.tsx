"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

import ButtonFeedback from "../../../components/button/ButtonFeedback";
import GoBackButton from "../../../components/button/GoBackButton";

const RoadmapHeader = () => {
  const router = useRouter();

  return (
    <header className="navbar p-[1.875rem] font-bold mb-0">
      <div className="grid grid-rows-2 gap-2.5">
        <Link href="/">
          <GoBackButton className="text-white" stroke="#fff" />
        </Link>
        <h3>Roadmap</h3>
      </div>

      <ButtonFeedback onClick={() => router.push("/create-feedback")}>
        {" "}
        &#43; Add feedback{" "}
      </ButtonFeedback>
    </header>
  );
};

export default RoadmapHeader;
