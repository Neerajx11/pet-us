import React from "react";
import { AlertTriangle } from "react-feather";

const NotFound = () => {
  return (
    <div
      style={{ height: "calc(100vw - 10px)" }}
      className="flex flex-col items-center justify-center"
    >
      <AlertTriangle strokeWidth="1" className="w-24 h-24 text-primary" />
      <p className="mt-6 text-3xl font-semibold text-center text-primary">
        Page not found
      </p>
    </div>
  );
};

export default NotFound;
