import React from "react";
import { useSelector } from "react-redux";
import CardRender from "../components/CardRender";
import Footer from "../components/Footer";
import Template from "../components/Template";

const MyDoggo = () => {
  const { uid } = useSelector((state) => state.auth.user);
  return (
    <div>
      <Template head="My" sub="Doggo">
        <div className="flex flex-wrap justify-around my-8 min-h-[60vh]">
          <CardRender str="myDoggo" uid={uid} msg={true} />
        </div>
      </Template>
      <Footer />
    </div>
  );
};

export default MyDoggo;
