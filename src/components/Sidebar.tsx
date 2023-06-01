import Header from "./Header";
import CategoriesMenu from "./CategoriesMenu";
import Roadmap from "@/components/roadmap/Roadmap";
import { iProductFeedbacks } from "@/types/models";

const Sidebar = ({ productFeedbacks }: iProductFeedbacks) => {
  return (
    <div className="basis-[23.5%] ">
      <Header />
      <CategoriesMenu productFeedbacks={productFeedbacks} />
      <Roadmap />
    </div>
  );
};

export default Sidebar;
