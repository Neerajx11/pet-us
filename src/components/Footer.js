import React from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import { Facebook, GitHub, Instagram } from "react-feather";

const Footer = () => {
  return (
    <div className="text-white shadow-md">
      <div className="flex flex-col items-start justify-start px-20 py-12 space-y-12 lg:space-y-0 lg:items-center lg:justify-around lg:flex-row bg-bgsecondary lg:px-0">
        <div>
          <Logo />
          <p className="w-[200px]  mt-4 lg:mb-4 tracking-wide">
            Make a change get your buddy today.
          </p>
        </div>
        <div className="flex flex-col flex-wrap space-y-8 md:flex-row md:space-y-0 md:space-x-20">
          <NavLink
            to="/explore"
            className="tracking-wide transition-all duration-200 hover:text-gray-200"
          >
            Explore
          </NavLink>
          <NavLink
            to="/add"
            className="tracking-wide transition-all duration-200 hover:text-gray-200"
          >
            Put for adoption
          </NavLink>
          <NavLink
            to="/mydoggo"
            className="tracking-wide transition-all duration-200 hover:text-gray-200"
          >
            Your dogs
          </NavLink>
        </div>
        <div className="flex space-x-6">
          <a href="https://www.instagram.com/animalaid_india" target="blank">
            <Instagram className="text-primary" />
          </a>
          <a href="https://www.instagram.com/animalaid_india" target="blank">
            <GitHub className="text-primary" />
          </a>
          <a href="https://www.facebook.com/AnimalAidUnlimited/" target="blank">
            <Facebook className="text-primary" />
          </a>
        </div>
      </div>
      <div className="py-4 font-bold tracking-wider text-center bg-bgdark">
        <p>
          Made with ❤ by{" "}
          <a
            href="https://github.com/Neerajx11"
            className="underline cursor-pointer"
            target="blank"
          >
            Neeraj
          </a>{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
