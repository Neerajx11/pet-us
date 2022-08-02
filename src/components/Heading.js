import React from "react";

const Heading = ({
  text = "This is a heading add text",
  sub = false,
  className,
  ...props
}) => {
  if (sub) {
    return (
      <p
        className={`uppercase font-bold m-2 text-center text-primary text-lg ${className} mx-4`}
        {...props}
      >
        {text}
      </p>
    );
  }
  return (
    <p
      className={`uppercase m-2 text-center font-black text-bgprimary text-3xl ${className} mx-4`}
      {...props}
    >
      {text}
    </p>
  );
};

export default Heading;
