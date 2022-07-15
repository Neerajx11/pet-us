import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { signOut } from "../features/authSlice";

import DefaultProfileImg from "../assests/images/defaultProfile.jpg";

const ProfileMenu = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const profileClickHandler = (e) => {
    e.stopPropagation();
    setShowProfileMenu((prev) => !prev);
  };

  const hideProfileMenu = () => setShowProfileMenu(false);

  useEffect(() => {
    window.addEventListener("click", hideProfileMenu);
    return () => {
      window.removeEventListener("click", hideProfileMenu);
    };
  }, []);
  return (
    <div className="relative">
      <img
        src={user.photoURL || DefaultProfileImg}
        className="w-10 border-[3px] transition-all duration-200 border-solid rounded-full cursor-pointer border-orange-400 hover:border-primary"
        alt={`${user.name} profile`}
        onClick={profileClickHandler}
        referrerPolicy="no-referrer"
      />
      {showProfileMenu && (
        <div className="absolute right-1 -bottom-[130px] bg-white border-[1px] border-gray-300 border-solid rounded w-40 z-10">
          <div className="absolute w-2 h-2 bg-white border-gray-300 border-solid border-l-[1px] border-t-[1px] rotate-45 -translate-y-1 right-3"></div>
          <NavLink
            to="add"
            className="relative z-10 border-b-[1px] border-solid border-gray-300 block w-full py-2 px-3 m-0 hover:text-primary hover:bg-primarylight"
          >
            Add doggo
          </NavLink>
          <NavLink
            to="mydoggo"
            className="border-b-[1px] border-solid border-gray-300 block w-full py-2 px-3 m-0 hover:text-primary hover:bg-primarylight"
          >
            Manage doggo
          </NavLink>
          <p
            className="w-full px-3 py-2 m-0 cursor-pointer hover:text-primary hover:bg-primarylight"
            onClick={() => dispatch(signOut())}
          >
            Logout
          </p>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
