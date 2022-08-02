import React from "react";
import { DollarSign, HelpCircle, Send } from "react-feather";

const Perks = () => {
  return (
    <div className="flex flex-col items-center justify-center py-24 shadow-md lg:flex-row">
      <div className="flex justify-center w-11/12 space-x-2 text-3xl font-black tracking-wider uppercase lg:ml-24 md:space-x-0 md:justify-start text-bgprimary md:text-6xl md:flex-col md:space-y-8 md:w-6/12">
        <span>No</span>
        <span className="text-primary">Strings</span>
        <span>attached</span>
      </div>
      <div className="flex flex-col w-11/12 mt-10 space-y-10 font-medium md:w-6/12 lg:mt-0">
        <div className="flex items-center space-x-4">
          <div className="p-4 text-white rounded-full bg-primary">
            <DollarSign />
          </div>
          <p className="text-lg tracking-wide text-bgprimary">
            Its free and always will be. No doubts.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="p-4 text-white rounded-full bg-primary">
            <Send />
          </div>
          <p className="text-lg tracking-wide text-bgprimary">
            Login and start finding your friend.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="p-4 text-white rounded-full bg-primary">
            <HelpCircle />
          </div>
          <p className="text-lg tracking-wide text-bgprimary">
            Confused get on a call and talk about it
          </p>
        </div>
      </div>
    </div>
  );
};

export default Perks;
