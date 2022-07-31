import React from "react";

const Template = ({ head, sub, children }) => {
  return (
    <div className="mt-4 rounded-md shadow-md">
      <div className="px-2 pt-4 border-b-4 border-solid border-primary">
        <p className="px-4 mb-2 text-2xl font-bold tracking-wide text-bgprimary">
          {head} <span className="ml-1 text-primary">{sub}</span>
        </p>
      </div>
      {children}
    </div>
  );
};

export default Template;
