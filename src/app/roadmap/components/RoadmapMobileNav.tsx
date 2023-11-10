'use client';
import * as React from 'react';
import Tab from '@/components/button/Tab';
import { useState } from 'react';
import RoadmapListItems from './RoadmapListItems';

const RoadmapMobileNav = ({ data }: any) => {
  const [active, setActive] = useState(data[0]);

  const activeBtn = (value: any) => {
    setActive(value);
  };

  return (
    <>
      <div className="roadmap-mobile border-b-2 border-b-secondary/10">
        {data.map((el: any) => (
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
        <RoadmapListItems
          key={data.id}
          feedbacksList={active.feedbacks}
          name={active.name}
        />
      </div>
    </>
  );
};

export default RoadmapMobileNav;
