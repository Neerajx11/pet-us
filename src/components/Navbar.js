import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { signIn, signOut } from "../features/authSlice";
import Button from "./Button";
import { Menu, X } from "react-feather";

import Logo from "./Logo";
import ProfileMenu from "./ProfileMenu";
import DefaultProfileImg from "../assests/images/defaultProfile.jpg";

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const [showSideNav, setShowSideNav] = useState(false);

  const hideShowNav = () => setShowSideNav(false);
  const toggleShowNav = () => setShowSideNav((prev) => !prev);

  useEffect(() => {
    document.body.style.overflowY = showSideNav ? "hidden" : "auto";
  }, [showSideNav]);

  return (
    <>
      <nav className="flex items-center justify-between px-8 py-4 shadow-md text-md">
        <NavLink to="/">
          <Logo type="dark" />
        </NavLink>
        <div className="items-center justify-between hidden space-x-10 font-semibold tracking-wide md:flex w-max text-bgprimary">
          <NavLink
            to="/explore"
            className="px-6 py-2 transition-colors duration-200 hover:text-primary hover:bg-primarylight"
          >
            Explore
          </NavLink>
          <NavLink
            to="/about"
            className="px-6 py-2 transition-colors duration-200 hover:text-primary hover:bg-primarylight"
          >
            About
          </NavLink>
          {user ? (
            <ProfileMenu />
          ) : (
            <Button text="Sign In" onClick={() => dispatch(signIn())} />
          )}
        </div>
        <div className="py-1 md:hidden">
          <Menu
            className="w-8 h-8 cursor-pointer text-primary"
            onClick={toggleShowNav}
          />
        </div>
        {showSideNav && (
          <div
            onClick={hideShowNav}
            className="fixed top-0 left-0 z-20 w-screen h-screen bg-black cursor-pointer md:hidden bg-opacity-20"
          ></div>
        )}
      </nav>

      {/* SideNav Mobile Screen */}
      <div
        className={`fixed top-0 right-0 z-30 md:hidden ease-linear duration-200 shadow-md h-screen text-white w-80 bg-primary ${
          !showSideNav && "translate-x-full"
        }`}
      >
        <div
          className={`flex ${
            user ? "justify-between" : "justify-end"
          } items-center mx-4 text-white h-[12%]`}
        >
          {user && (
            <img
              src={user.photoURL || DefaultProfileImg}
              className="w-12 h-12 border-[3px] object-cover transition-all duration-200 border-solid rounded-full cursor-pointer border-white-40"
              alt={`${user.name} profile`}
            />
          )}
          <X onClick={hideShowNav} className="w-12 h-12 cursor-pointer" />
        </div>
        <div
          onClick={hideShowNav}
          className="flex flex-col justify-between font-semibold tracking-wide h-[83%] pl-4 pt-8"
        >
          <div className="flex flex-col space-y-12">
            <NavLink to="/explore">Explore</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/add">Add Doggo</NavLink>
            <NavLink to="/mydoggo">Manage Doggo</NavLink>
          </div>
          {user ? (
            <div className="cursor-pointer" onClick={() => dispatch(signOut())}>
              Logout
            </div>
          ) : (
            <div className="cursor-pointer" onClick={() => dispatch(signIn())}>
              Sign In
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
