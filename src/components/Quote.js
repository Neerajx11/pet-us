import React from "react";
import Heading from "./Heading";

const Quote = () => {
  return (
    <div className="relative pt-16 pb-6 text-center border-b-8 border-solid shadow-md border-primary">
      <Heading text="They say" />
      <div className="mx-4 my-12 text-xl font-medium tracking-wide">
        <p className="text-bgsecondary">
          <span className="text-primary">"</span>In a perfect world, all other
          than human animals would be free of human
        </p>
        <p className="text-bgsecondary">
          interference, and dogs and cats would be part of the ecological scheme
          <span className="text-primary">"</span>
        </p>
        <p className="py-4 font-bold text-primary">~PeTA</p>
      </div>
    </div>
  );
};

export default Quote;
