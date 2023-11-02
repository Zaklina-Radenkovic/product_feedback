'use client';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
    console.log('is open');
  };

  return (
    <div className="flex justify-between bg-header bg-cover bg-no-repeat px-12 py-10 md:flex-1 md:rounded-lg md:pb-[30px] md:pl-[25px] md:pt-[65px]">
      <div>
        <h2 className="font-bold text-white">Frontend Mentor</h2>
        <p className="pt-1.5 text-[15px] text-gray-light">Feedback board</p>
      </div>
      <button
        className="block cursor-pointer md:hidden"
        id="hamburger-menu"
        aria-label="Toggle site navigation"
        type="button"
        onClick={toggleMenu}
      >
        <svg width="20" height="17" xmlns="http://www.w3.org/2000/svg">
          <g fill="#FFF" fillRule="evenodd">
            <path d="M0 0h20v3H0zM0 7h20v3H0zM0 14h20v3H0z"></path>
          </g>
        </svg>
        {/* <svg width="18" height="17" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z"
            fill="#FFF"
            fill-rule="evenodd"
          ></path>
        </svg> */}
      </button>
      <div
        className="bg-gray-300/60 fixed inset-0 z-0 hidden opacity-0 backdrop-blur"
        id="backdrop"
        aria-hidden="true"
      ></div>

      {/* {isOpen && (
        <div
          className="animate-open-menu rounded-b-2xl bg-gray-50 shadow-gray-900/20 absolute inset-x-0 top-0 z-0  origin-top flex-col px-6 pb-6 pt-32 shadow-2xl"
          id="mobile-menu"
        >
          <div className="space-y-4">
            <a
              className="text-gray-700 block text-base leading-7 tracking-tight"
              data-headlessui-state="open"
              href="/"
            >
              Enter Invitation Code
            </a>
            <a
              className="text-gray-700 block text-base leading-7 tracking-tight"
              data-headlessui-state="open"
              href="/#Join a Public Pool"
            >
              Join a Public Pool
            </a>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Header;
