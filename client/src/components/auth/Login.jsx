import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { message } from "antd";
import { useDispatch } from "react-redux";

import { loginAction } from "../../store/actions/userAction";
// import { handleServerLogin } from "../Fetchfun";



function Login({ darkmode }) {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    rememberMe: true,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, checked, type } = e.target;

    setUserInfo((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleLogin = () => {
    if (!userInfo.email || !userInfo.password) {
      message.error("Please fill in all fields");
      return;
    }
    handleServerLogin(userInfo,dispatch,navigate)

    
  };

  return (
    <>
      <div
        className={`${
          darkmode ? "bg-slate-500" : "bg-slate-500"
        } 0 min-h-screen flex flex-col md:flex-row `}
      >
        <div className="hidden md:flex items-center justify-center  md:flex-1 ">
          {/* <Comming /> */}d
        </div>
        <div className="flex flex-col my-auto md:flex-1">
          <div className="flex items-center justify-center bg-gray-00">
            <form action="">

            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
              <h2 className="text-2xl font-bold mb-4">Login</h2>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">
                  Email / Id-number
                </label>
                <input
                  type="email"
                  name="email"
                  className={`w-full border-2 border-gray-950 p-2 ${
                    userInfo.email === "" && "border-rose-600"
                  } rounded focus:outline-none focus:border-blue-500`}
                  placeholder="Email / Id-number"
                  value={userInfo.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className={`w-full border-2 border-gray-950 ${
                      userInfo.password === "" && "border-rose-600"
                    }  p-2 rounded focus:outline-none  focus:border-blue-500`}
                    placeholder="Password"
                    value={userInfo.password}
                    onChange={handleInputChange}
                  />
                  <span
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <AiFillEyeInvisible className="text-gray-500 text-3xl" />
                    ) : (
                      <AiFillEye className="text-gray-500 text-3xl" />
                    )}
                  </span>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  className="mr-2"
                  checked={userInfo.rememberMe}
                  onChange={handleInputChange}
                />

                <label htmlFor="rememberMe" className="text-gray-700">
                  Remember Me
                </label>
              </div>
              <button
                className="w-full bg-blue-500  text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:bg-blue-400"
                onClick={handleLogin}
              >
                Log In
              </button>
              <div className="mt-4 text-center">
                <p>
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-blue-500">
                    Sign up
                  </Link>
                </p>
                <p>
                  <Link to="/forgot" className="text-blue-500">
                    Forgot password?
                  </Link>
                </p>
              </div>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
