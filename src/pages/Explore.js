import React from "react";
import CardRender from "../components/CardRender";
import Footer from "../components/Footer";
import Template from "../components/Template";

const Explore = () => {
  return (
    <div>
      <Template head="Available" sub="Doggo">
        <div className="flex flex-wrap justify-around my-8">
          <CardRender str="doggo" />
        </div>
      </Template>
      <Footer />
    </div>
  );
};

export default Explore;
