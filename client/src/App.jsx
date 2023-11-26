import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Forgot from "./components/auth/Forgot";
import Reset from "./components/auth/Reset";
import Profile from "./components/pages/Profile";
import Error404 from "./components/pages/Error404";
import Dashboard from "./components/pages/Dashboard";

import { handleGetUser } from "./components/Fetchfun";

import "./assets/styles/App.css";

import Footer from "./components/pages/Footer";
import Navbar from "./components/pages/Navbar";

function App() {
  const navigate = useNavigate();
  // const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userData);
  const loggedIn = useSelector((state) => state.user.loggedIn);
  const darkMode = useSelector((state) => state.app.darkMode);

  useEffect(() => {
    // if (!loggedIn && location.pathname.startsWith("/dashboard")) {
    //   handleGetUser(navigate, user)
    //   // message.info("Please login to access the app");
    //   // navigate("/login");
    // } else if (user && user.status === "inactive" && !location.pathname.startsWith("/dashboard/profile")) {
    //   navigate("/activate");
    // }

    if (!loggedIn) {
      handleGetUser(navigate, dispatch);
      console.log(location.pathname);
    }
    //  else if (user && user.status === "inactive" && !location.pathname.startsWith("/dashboard/profile") ) {
    //   navigate("/activate");
    // }
  }, [user]);

  return (
    <>
      <div className="">
        <Navbar loggedIn={loggedIn} />

        <div
          className={`min-h-screen  ${darkMode ? "bg-gray-950" : "bg-gray-50"}`}
        >
          {/* <p>Markdairyfresh</p> */}

          <Routes>
            <Route path="/" element={<Dashboard darkMode={darkMode} />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="/forgot" element={<Forgot />} />
            <Route path="/reset/:token" element={<Reset />} />
            <Route path="profile" element={<Profile />} />

            <Route path='*' element={<Error404 />} />

          </Routes>
        </div>
      </div>
      ;
    </>
  );
}

export default App;
