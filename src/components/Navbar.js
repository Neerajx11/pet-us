import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { signOut } from "../features/authSlice";

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/explore">Explore</NavLink>
      <NavLink to="/about">About</NavLink>
      {user && <button onClick={() => dispatch(signOut())}>Signout</button>}
    </div>
  );
};

export default Navbar;
