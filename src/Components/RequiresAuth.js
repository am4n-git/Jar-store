import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/auth-context";

function RequiresAuth({ children }) {
  const { isLoggedIn } = useAuth();
  console.log(isLoggedIn);
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

export default RequiresAuth;
