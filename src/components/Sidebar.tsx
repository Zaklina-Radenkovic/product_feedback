// "use client";
import Header from "./Header";
import CategoriesMenu from "./CategoriesMenu";
import RoadmapMenu from "@/components/roadmap/RoadmapMenu";

const Sidebar = () => {
  return (
    <div className="basis-[255px] shrink-0">
      <Header />
      <CategoriesMenu />
      <RoadmapMenu />
    </div>
  );
};

export default Sidebar;
