import React from "react";
import CardRender from "./CardRender";
import Heading from "./Heading";

const MakeTheChange = () => {
  return (
    <div className="pb-6 mt-12 shadow-md md:mt-24">
      <Heading text="adopt a dog" sub={true} />
      <Heading text="Make the change" />
      <div className="flex flex-wrap justify-around my-8">
        <CardRender length={3} />
      </div>
      <div className="flex justify-around my-12"></div>
    </div>
  );
};

export default MakeTheChange;
