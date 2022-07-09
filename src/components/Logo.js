import React from "react";
import PawLogo from "../assests/icons/paw.svg";

const Logo = ({ type = "light", className, ...props }) => {
  return (
    <div className={`flex items-center w-max ${className}`} {...props}>
      <img src={PawLogo} className="w-6 h-6" alt="paws" />
      <p className="ml-2 text-2xl font-bold">
        <span
          className={`${type === "light" ? "text-white" : "text-bgprimary"}`}
        >
          pet
        </span>
        <span className="text-primary">Us</span>
      </p>
    </div>
  );
};

export default Logo;
