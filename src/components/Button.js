import React from "react";

const Button = ({ text, className, variant = "", ...props }) => {
  if (variant === "transparent") {
    return (
      <button
        {...props}
        className={`text-center font-bold tracking-wide bg-white cursor-pointer border border-solid border-primary hover:bg-primary hover:text-white transition-all divide-fuchsia-200 mx-0 text-primary px-6 py-2 rounded-sm ${className}`}
      >
        {text || "Button"}
      </button>
    );
  }
  return (
    <button
      {...props}
      className={`text-center font-bold tracking-wide bg-primary cursor-pointer border border-solid border-primary hover:bg-white hover:text-primary transition-all divide-fuchsia-200 mx-0 text-white px-6 py-2 rounded-sm ${className}`}
    >
      {text || "Button"}
    </button>
  );
};

export default Button;
