import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Private = ({ component: Component, ...props }) => {
  const user = useSelector((state) => state.auth.user);
  return user ? <Component {...props} /> : <Navigate to="/login" replace />;
};

export default Private;
