import React from "react";
import { Navigate } from "react-router-dom";

function RequiresAuth({ login, children }) {
  return login ? children : <Navigate to="/login" replace />;
}

export default RequiresAuth;
