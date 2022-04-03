import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { signIn } from "../features/authSlice";

import s from "./Navbar.module.css";

import logo from "../assests/logo.svg";
import { Book, Compass, LogIn, User } from "react-feather";
import Profile from "./Profile";

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const [isVisible, setIsVisible] = useState(false);

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
            <div
              className={s.pro}
              onClick={() => setIsVisible((prev) => !prev)}
            >
              <span>profile</span>
              <User strokeWidth={2} size={18} />
              {isVisible && <Profile className={s.trans} />}
            </div>
          ) : (
            <>
              <span onClick={() => dispatch(signIn())}>sign in</span>
              <LogIn strokeWidth={2} size={18} />
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
