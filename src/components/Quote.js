import React from "react";
import Heading from "./Heading";

const Quote = () => {
  return (
    <div className="text-center shadow-md pt-5 pb-1">
      <Heading text="They say" />
      <div className="my-12 text-xl italic font-medium tracking-wide">
        <p className="text-bgsecondary">
          <span className="text-primary">"</span>In a perfect world, all other
          than human animals would be free of human
        </p>
        <p className="text-bgsecondary">
          interference, and dogs and cats would be part of the ecological scheme
          <span className="text-primary">"</span>
        </p>
        <p className="text-primary font-bold py-4">~PeTA</p>
      </div>
    </div>
  );
};

export default Quote;
