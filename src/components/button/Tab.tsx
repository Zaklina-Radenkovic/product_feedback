import React, { ReactNode } from 'react';
import { RoadmapData } from '@/app/roadmap/page';

type TabProps = {
  children: ReactNode;
  active: boolean;
  el: RoadmapData;
  onActiveBtn: (value: RoadmapData) => void;
};

const Tab = ({ children, active, el, onActiveBtn }: TabProps) => {
  return (
    <button
      className={`py-3 text-base outline-0 ${
        active ? `border-b-4 border-${el.color} pb-2 opacity-100` : `opacity-60`
      }`}
      onClick={() => onActiveBtn(el)}
    >
      {children}
    </button>
  );
};

export default Tab;
