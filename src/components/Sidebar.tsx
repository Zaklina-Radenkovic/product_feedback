import Header from "./Header";
import CategoriesMenu from "./CategoriesMenu";
import Roadmap from "@/components/roadmap/Roadmap";

const Sidebar = () => {
  return (
    <div className="basis-[23.5%] ">
      <Header />
      <CategoriesMenu />
      <Roadmap />
    </div>
  );
};

export default Sidebar;
