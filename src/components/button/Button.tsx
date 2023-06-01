import React from "react";

const Button = ({ children, className, onClick, ...props }: any) => {
  return (
    <button className={className} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
