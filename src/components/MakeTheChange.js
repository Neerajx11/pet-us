import React from "react";
import CardRender from "./CardRender";
import Heading from "./Heading";

const MakeTheChange = () => {
  return (
    <div className="my-8 shadow-md">
      <Heading text="adopt a dog" sub={true} />
      <Heading text="Make the change" />
      <div className="flex justify-around flex-wrap my-8">
        <CardRender length={3} />
      </div>
      <div className="flex justify-around my-12"></div>
    </div>
  );
};

export default MakeTheChange;
