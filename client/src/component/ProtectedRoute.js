import React from "react";
import { Navigate, Outlet } from "react-router-dom";
// import SignIn from "../component/SignIn/SignIn.js";

const ProtectedRoute = () => {
  const Auth = localStorage.getItem("Auth");
  return Auth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
