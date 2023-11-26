import React, { useEffect } from "react";
import { Route, Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { message } from "antd";
import { handleGetUser } from "./Fetchfun";

const PrivateRoute = ({ element, requiredRoles }) => {
  const user = useSelector((state) => state.user.userData);
  const userRole = user?.role;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      handleGetUser(navigate,dispatch)
      // message.error("please login ");
      // navigate("/login");
    }
    if (requiredRoles && !requiredRoles.includes(userRole)) {
      navigate("/unauthorized");
    }
    return () => {};
  }, []);

  return user ? <>{element}</> : <Navigate to="/login" />;
};

export default PrivateRoute;
