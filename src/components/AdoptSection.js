import React from "react";
import Button from "./Button";
import Heading from "./Heading";

import Paws from "../assests/icons/paw.svg";
import WhiteDog from "../assests/images/whiteDog.png";
import { NavLink } from "react-router-dom";

const AdoptSection = () => {
  return (
    <div className="relative py-20 shadow-md">
      <Heading text="take a step and get a pet today" />
      <div className="relative z-10 flex flex-col items-center justify-center mt-12 mb-4 space-y-6 md:mt-20 md:space-y-0 md:space-x-8 md:flex-row">
        <NavLink to="/explore">
          <Button text="Get your pet today" className="w-[200px] md:w-max" />
        </NavLink>
        <NavLink to="/add">
          <Button
            text="Put for adoption"
            className="w-[200px] md:w-max"
            variant="transparent"
          />
        </NavLink>
      </div>
      <img src={Paws} className="absolute w-6 top-4 left-12" alt="paws" />
      <img src={Paws} className="absolute w-6 top-4 right-12" alt="paws" />
      <img src={Paws} className="absolute w-6 bottom-4 right-12" alt="paws" />
      <img src={Paws} className="absolute w-6 bottom-4 left-12" alt="paws" />
      <img
        src={WhiteDog}
        className="absolute bottom-0 hidden md:block w-52 right-44"
        alt="paws"
      />
    </div>
  );
};

export default AdoptSection;
