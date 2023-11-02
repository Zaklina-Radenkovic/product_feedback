import Header from './Header';
import CategoriesMenu from '../../components/CategoriesMenu';
import RoadmapMenu from '../roadmap/components/RoadmapMenu';

const Sidebar = () => {
  return (
    <div className="md:mb-10 md:flex md:gap-2.5 lg:block lg:shrink-0 lg:basis-[255px]">
      <Header />
      <CategoriesMenu />
      <RoadmapMenu />
    </div>
  );
};

export default Sidebar;
