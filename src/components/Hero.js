import { NavLink } from "react-router-dom";
import Button from "./Button";

import HeroDog from "../assests/images/hero.png";
import { Facebook, GitHub, Instagram } from "react-feather";

const Hero = () => {
  return (
    <div className="flex items-center shadow-md">
      <div className="absolute flex w-1 h-48 mr-16 top-44 left-4 bg-primary"></div>
      {/* Main section */}
      <div className="flex flex-col justify-between w-full mx-10 md:mx-24 lg:space-x-10 lg:flex-row xl:mx-32">
        <div className="py-12 mt-6 text-center md:mt-12 lg:text-left">
          <p className="pb-12 text-5xl md:text-6xl font-bold">
            <span className="text-bgprimary">You can </span>{" "}
            <span className="text-primary">Help!</span>
          </p>
          <p className="mx-auto mb-12 leading-8 tracking-wide w-96 md:w-34">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vero
            illum ratione molestias? Facilis consequatur asperiores commodi hic
            necessitatibus.
          </p>
          <NavLink to="/explore">
            <Button
              className="mx-auto font-bold tracking-wide w-80 lg:w-full"
              text="Get your pet today"
            />
          </NavLink>
        </div>
        <div className="flex items-center mx-auto min-w-32 lg:items-end">
          <img
            src={HeroDog}
            className="mt-8 sm:mt-16 lg:mt-72"
            alt="hero dog"
          />
        </div>
      </div>
      <div className="absolute hidden sm:flex flex-col space-y-8 right-4 lg:right-12 top-56 md:top-36">
        <a href="https://www.instagram.com/animalaid_india">
          <Instagram strokeWidth="1" className="text-bgprimary" />
        </a>
        <a href="https://www.instagram.com/animalaid_india">
          <GitHub strokeWidth="1" className="text-bgprimary" />
        </a>
        <a href="https://www.facebook.com/AnimalAidUnlimited/">
          <Facebook strokeWidth="1" className="text-bgprimary" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
