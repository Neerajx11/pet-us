import React from "react";
import { useSelector } from "react-redux";
import CardCtr from "./CardCtr";

const MyDoggo = () => {
  const { uid } = useSelector((state) => state.auth.user);
  return (
    <div>
      <p className={"head"}>My Doggo</p>
      <CardCtr msg={true} str="myDoggo" uid={uid} />
    </div>
  );
};

export default MyDoggo;
