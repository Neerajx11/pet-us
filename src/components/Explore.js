import React from "react";
import AddDoggo from "./AddDoggo";
import ShowDoggo from "./ShowDoggo";
import ShowUsers from "./ShowUsers";

const Explore = () => {
  return (
    <div>
      <h1>Explore</h1>
      <ShowUsers />
      <ShowDoggo />
      <AddDoggo />
    </div>
  );
};

export default Explore;
