'use client';
import Tab from '@/components/button/Tab';
import { useState } from 'react';
import RoadmapListItems from './RoadmapListItems';
import { RoadmapData } from '../page';

type RoadmapMobileNavProps = {
  data: RoadmapData[];
};

const RoadmapMobileNav = ({ data }: RoadmapMobileNavProps) => {
  const [active, setActive] = useState(data[0]);

  const activeBtn = (value: RoadmapData) => {
    setActive(value);
  };

  return (
    <>
      <div className="roadmap-mobile border-b-2 border-b-secondary/10">
        {data.length > 0 &&
          data.map((el: RoadmapData) => (
            <Tab
              el={el}
              key={el.id}
              onActiveBtn={activeBtn}
              active={active === el}
            >
              <h3 className="mb-3.5 text-base font-bold text-secondary">
                {el.name} ({el.feedbacks.length > 0 ? el.feedbacks.length : 0})
              </h3>
            </Tab>
          ))}
      </div>

      <div className="col-span-full flex flex-col px-7">
        <h3 className="mt-3.5 font-bold text-secondary">
          {active.name} (
          {active.feedbacks.length > 0 ? active.feedbacks.length : 0})
        </h3>
        <p className="mb-9 mt-4">{active.description}</p>
        <RoadmapListItems feedbacksList={active.feedbacks} name={active.name} />
      </div>
    </>
  );
};

export default RoadmapMobileNav;
