import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { signIn } from "../features/authSlice";
import Button from "./Button";

import Logo from "./Logo";

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  return (
    <nav className="px-8 py-4 shadow-md text-md flex justify-between items-center">
      <NavLink to="/">
        <Logo type="dark" />
      </NavLink>
      <div className="flex w-max tracking-wide font-medium justify-between items-center space-x-10">
        <NavLink
          to="/explore"
          className="px-6 py-2 hover:text-primary transition-colors duration-200 hover:bg-primarylight"
        >
          Explore
        </NavLink>
        <NavLink
          to="/about"
          className="px-6 py-2 hover:text-primary transition-colors duration-200 hover:bg-primarylight"
        >
          About
        </NavLink>
        <Button
          text="Sign In"
          className="cursor-pointer bg-red-500"
          onClick={() => dispatch(signIn())}
        />
      </div>
    </nav>
  );
};

export default Navbar;
