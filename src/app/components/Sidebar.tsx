'use client';
import Header from './Header';
import { useState, useEffect } from 'react';

import CategoriesMenu from '../../components/CategoriesMenu';
import RoadmapMenu from '../roadmap/components/RoadmapMenu';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [width, setWidth] = useState<number>(window.innerWidth)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div className="relative grid grid-cols-2 md:mb-10 md:flex md:gap-2.5 xl:block xl:shrink-0 xl:basis-[255px]">
      <Header />
      {isOpen && (
        <div
          className={
            'bg-background fixed z-20 col-[1_/_-1] ml-32 flex h-full flex-col gap-2.5 overflow-y-auto p-6 pt-28 sm:col-[2_/_-1] md:static md:ml-0 md:flex md:flex-row md:items-stretch md:gap-2.5 md:p-0 xl:flex xl:flex-col xl:gap-0'
          }
        >
          <CategoriesMenu />
          <RoadmapMenu />
        </div>
      )}
      {!isOpen && (
        <div
          className={
            'hidden md:static md:flex md:flex-row md:items-stretch md:gap-2.5 xl:flex xl:flex-col xl:gap-0'
          }
        >
          <CategoriesMenu />
          <RoadmapMenu />
        </div>
      )}
      <button
        className="z-50 col-[2_/_-1] row-span-full block cursor-pointer justify-self-end pr-6 md:hidden"
        id="hamburger-menu"
        aria-label="Toggle site navigation"
        type="button"
        onClick={toggleMenu}
      >
        {isOpen ? (
          <svg width="18" height="17" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z"
              fill="#FFF"
              fill-rule="evenodd"
            ></path>
          </svg>
        ) : (
          <svg width="20" height="17" xmlns="http://www.w3.org/2000/svg">
            <g fill="#FFF" fillRule="evenodd">
              <path d="M0 0h20v3H0zM0 7h20v3H0zM0 14h20v3H0z"></path>
            </g>
          </svg>
        )}
      </button>

      {isOpen && (
        <div
          className={
            'fixed left-0 z-10 h-full w-full bg-font-color/50 pt-[120px] md:hidden'
          }
          id="backdrop"
          aria-hidden="true"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
