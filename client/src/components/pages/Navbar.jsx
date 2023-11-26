import React, { useEffect, useState, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { HiMenuAlt1 } from "react-icons/hi";
import { VscChromeClose } from "react-icons/vsc";

import { setDarkMode } from "../../store/actions/appAction";

function Navbar({ loggedIn }) {
  const [isOpen, setIsOpen] = useState(true);
  const darkMode = useSelector((state) => state.app.darkMode);
  const user = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();

  return (
    <nav
      className={`${
        darkMode ? "bg-blue-900 text-white" : "bg-blue-500"
      }  p-2 sticky top-0 z-50`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="md:hidden m-2">
          {isOpen ? (
            <HiMenuAlt1
              className="hover:cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
              size={35}
            />
          ) : (
            <VscChromeClose
              className="hover:cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
              size={40}
            />
          )}
        </div>

        <div
          className={`${darkMode ? "bg-blue-900 text-white" : "bg-blue-500"}  ${
            isOpen ? "hidden md:block" : ""
          } absolute md:static  p-5  m:min-h-[20vh] left-0 top-[70px] w-full`}
        >
          <>
            <ul className="flex md:flex-row  flex-col gap-4">
              <NavLink
                to="/"
                className="text-white hover:text-blue-300 hover:underline transition duration-300"
              >
                Dashboard
              </NavLink>
              {/* <NavLink
                to="/dashboard/users"
                className="text-white hover:underline hover:text-red-200 transition duration-300"
              >
                Users
              </NavLink> */}

              <NavLink
                to="/profile"
                className="text-white hover:text-blue-200 transition duration-300"
              >
                Profile
              </NavLink>
              <NavLink
                to="/login"
                className="text-white hover:text-blue-200 hover:underline transition duration-300"
              >
                Login
              </NavLink>
            </ul>
          </>
        </div>

        {/* <div className="w-80 bg-rose-500">
s
                </div> */}

        <div className="right flex items-center gap-6 text-3xl">
          {darkMode ? (
            <BsFillSunFill
              className="text-white"
              onClick={() => {
                dispatch(setDarkMode());
              }}
            />
          ) : (
            <BsMoonStarsFill
              onClick={() => {
                dispatch(setDarkMode());
              }}
            />
          )}

          <NavLink to="/profile" className="text-white text-lg font-bold">
            <CgProfile className="text-3xl hover:text-black" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
