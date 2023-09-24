import Header from "./Header";
import CategoriesMenu from "../../components/CategoriesMenu";
import RoadmapMenu from "../roadmap/components/RoadmapMenu";

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
