import { NavLink } from "react-router-dom";
import Button from "./Button";
import Footer from "./Footer";

const About = () => {
  return (
    <div>
      <div className="px-[50px] pt-12 pb-24 min-h-[80vh]">
        <div className="text-center md:text-left">
          <p className="text-primary text-[80px] font-bold">35</p>
          <p className="text-primary text-[80px] font-bold">Million</p>
          <p className="mt-4 text-xl font-semibold tracking-wider md:mt-6 md:text-4xl text-bgprimary">
            stray dogs roam around in India
          </p>
          <p className="mt-2 text-xl font-semibold tracking-wider md:mt-12 md:text-4xl text-bgprimary">
            you can provide them home
          </p>
        </div>
        <div className="relative z-10 flex flex-col items-center mt-12 mb-4 space-y-6 md:mt-20 md:space-y-0 md:space-x-8 md:flex-row">
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
      </div>
      <Footer />
    </div>
  );
};

export default About;
