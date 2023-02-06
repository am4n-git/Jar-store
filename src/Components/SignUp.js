import React, { useState } from "react";
import * as Mui from "@mui/material";
import ArrowForwardIosTwoToneIcon from "@mui/icons-material/ArrowForwardIosTwoTone";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/auth-context";
function SignUp() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { setIsLoggedIn } = useAuth();

  function showPasswordHandle() {
    setShowPassword(true);
  }

  function handleSignUp() {
    if (password === "1234") {
      setIsLoggedIn(true);
      location.state ? navigate(location.state.from.pathname) : navigate("/");
    }
  }
  return (
    <div className="login-container">
      <div className="login-fields-container">
        <Mui.TextField
          id="filled-basic"
          label="Full Name"
          variant="filled"
          className="login-fields"
        />
        <Mui.TextField
          id="filled-basic"
          label="Email"
          variant="filled"
          className="login-fields"
        />
        <Mui.TextField
          id="filled-basic"
          className="login-fields"
          label="Password"
          variant="filled"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        >
            <Mui.IconButton></Mui.IconButton>
        </Mui.TextField>
      </div>
      <div className="login-buttons">
        <Mui.Button
          onClick={handleSignUp}
          variant="contained"
          endIcon={<ArrowForwardIosTwoToneIcon />}
        >
          Create Account
        </Mui.Button>
      </div>
    </div>
  );
}

export default SignUp;
