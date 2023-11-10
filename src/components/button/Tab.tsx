import React from 'react';

const Tab = ({ children, active, el, onActiveBtn }: any) => {
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
