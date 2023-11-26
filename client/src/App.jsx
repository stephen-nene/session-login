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
import Footer from "./components/pages/Footer";
import Navbar from "./components/pages/Navbar";
import Unauthorized from "./components/pages/Unauthorized";

import PrivateRoute from "./components/PrivateRoute";
import { handleGetUser } from "./components/Fetchfun";

import "./assets/styles/App.css";

function App() {
  const navigate = useNavigate();
  // const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userData);
  const loggedIn = useSelector((state) => state.user.loggedIn);
  const darkMode = useSelector((state) => state.app.darkMode);

  // useEffect(() => {
  //   if (!loggedIn) {
  //     // handleGetUser(navigate,dispatch)
  //     // navigate("/login");
  //   }
  // }, [user]);

  const protectedRoutes = [
    { path: '/', element: <Dashboard darkMode={darkMode}/> },
    { path: 'profile', element: <Profile />, allowedRoles:["customer", "employee", "admin"] },
// ... other routes ...
  ];

  return (
    <>
      <div className="">
        <Navbar loggedIn={loggedIn} />

        <div
          className={`min-h-screen  ${darkMode ? "bg-gray-950" : "bg-gray-50"}`}
        >
          <Routes>

            {protectedRoutes.map(({ path, element, allowedRoles }) => (
              <Route
                key={path}
                path={path}
                element={
                  <PrivateRoute element={element} allowedRoles={allowedRoles} />
                }
              />
            ))}

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/unauthorized" element={<Unauthorized />} />

            <Route path="/forgot" element={<Forgot />} />
            <Route path="/reset/:token" element={<Reset />} />

            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>

        <Footer />
      </div>
      ;
    </>
  );
}

export default App;
