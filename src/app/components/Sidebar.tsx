import Header from './Header';
import CategoriesMenu from '../../components/CategoriesMenu';
import RoadmapMenu from '../roadmap/components/RoadmapMenu';

const Sidebar = () => {
  return (
    <div className="gap-2.5 md:mb-10 md:flex lg:block lg:shrink-0 lg:basis-[255px]">
      <Header />
      <CategoriesMenu />
      <RoadmapMenu />
    </div>
  );
};

export default Sidebar;
