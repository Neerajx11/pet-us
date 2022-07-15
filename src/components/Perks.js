import React from "react";
import { DollarSign, HelpCircle, Send } from "react-feather";

const Perks = () => {
  return (
    <div className="flex flex-col justify-center lg:flex-row py-16 items-center mx-2">
      <div className="lg:ml-24 space-x-2 md:space-x-0 justify-center md:justify-start text-bgprimary uppercase font-black tracking-wider text-3xl md:text-6xl flex md:flex-col md:space-y-8 w-11/12 md:w-6/12">
        <span>No</span>
        <span className="text-primary">Strings</span>
        <span>attached</span>
      </div>
      <div className="w-11/12 md:w-6/12 flex flex-col space-y-10 mt-10 lg:mt-0">
        <div className="flex items-center space-x-4">
          <div className="text-white rounded-full bg-primary p-4">
            <DollarSign />
          </div>
          <p className="text-bgprimary text-lg tracking-wide">
            Its free and always will be. No doubts.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-white rounded-full bg-primary p-4">
            <Send />
          </div>
          <p className="text-bgprimary text-lg tracking-wide">
            Sign in and start finding your friend.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-white rounded-full bg-primary p-4">
            <HelpCircle />
          </div>
          <p className="text-bgprimary text-lg tracking-wide">
            Confused get on a call and talk about it
          </p>
        </div>
      </div>
    </div>
  );
};

export default Perks;
