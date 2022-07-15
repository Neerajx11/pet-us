import React from "react";
import Hero from "../components/Hero";
import MakeTheChange from "../components/MakeTheChange";
import Perks from "../components/Perks";
import Quote from "../components/Quote";

const Landing = () => {
  return (
    <div>
      <Hero />
      <Perks />
      <MakeTheChange />
      <Quote />
    </div>
  );
};

export default Landing;
