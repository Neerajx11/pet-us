import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { signIn, signOut } from "../features/authSlice";

import s from "./Navbar.module.css";

import logo from "../assests/logo.svg";
import { Book, Compass, LogIn, LogOut } from "react-feather";

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  return (
    <nav className={s.nav}>
      <NavLink to="/">
        <div className={s.logo}>
          <img src={logo} alt="logo" />
          <span>petUs</span>
        </div>
      </NavLink>
      <div className={s.tabs}>
        <div className={s.navGroup}>
          <NavLink to="/explore">explore</NavLink>
          <Compass strokeWidth={2} size={22} />
        </div>
        <div className={s.navGroup}>
          <NavLink to="/about">about us</NavLink>
          <Book strokeWidth={2} size={18} />
        </div>
        <div className={s.navGroup}>
          {user ? (
            <>
              <span onClick={() => dispatch(signOut())}>sign out</span>
              <LogIn strokeWidth={2} size={18} />
            </>
          ) : (
            <>
              <span onClick={() => dispatch(signIn())}>sign in</span>
              <LogOut strokeWidth={2} size={18} />
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
