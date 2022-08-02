import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { signIn, signOut } from "../features/authSlice";
import Button from "./Button";
import {
  Book,
  Compass,
  Layers,
  LogIn,
  LogOut,
  Menu,
  Plus,
  X,
} from "react-feather";

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
            className="flex items-center px-6 py-2 transition-colors duration-200 hover:text-primary hover:bg-primarylight"
          >
            <Compass className="w-5 h-5 mr-2" /> Explore
          </NavLink>
          <NavLink
            to="/about"
            className="flex items-center px-6 py-2 transition-colors duration-200 hover:text-primary hover:bg-primarylight"
          >
            <Book className="w-5 h-5 mr-2" /> About
          </NavLink>
          {user ? (
            <ProfileMenu />
          ) : (
            <Button text="Login" onClick={() => dispatch(signIn())} />
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
              referrerPolicy="no-referrer"
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
            <NavLink to="/explore" className="flex items-center">
              <Compass className="w-5 h-5 mr-2" /> Explore
            </NavLink>
            <NavLink to="/about" className="flex items-center">
              <Book className="w-5 h-5 mr-2" /> About
            </NavLink>
            <NavLink to="/add" className="flex items-center">
              <Plus className="w-5 h-5 mr-2" /> Add Doggo
            </NavLink>
            <NavLink to="/mydoggo" className="flex items-center">
              <Layers className="w-5 h-5 mr-2" /> Manage Doggo
            </NavLink>
          </div>
          {user ? (
            <div
              className="flex items-center cursor-pointer"
              onClick={() => dispatch(signOut())}
            >
              <LogOut className="w-5 h-5 mr-2" /> Logout
            </div>
          ) : (
            <div
              className="flex items-center cursor-pointer"
              onClick={() => dispatch(signIn())}
            >
              <LogIn className="w-5 h-5 mr-2" /> Login
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
