import React from "react";

const Button = ({ text, className, ...props }) => {
  return (
    <div
      {...props}
      className={`border border-solid border-primary hover:bg-white hover:text-primary transition-all divide-fuchsia-200 mx-0 text-white px-6 py-2 rounded-sm ${className}`}
    >
      {text || "Button"}
    </div>
  );
};

export default Button;
