import React, { useState } from "react";
import * as Mui from "@mui/material";
import ArrowForwardIosTwoToneIcon from "@mui/icons-material/ArrowForwardIosTwoTone";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/auth-context";
function Login() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { setIsLoggedIn } = useAuth();
  function handleLogin() {
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
        />
      </div>
      <div className="login-buttons">
        <Mui.Button
          onClick={handleLogin}
          variant="contained"
          endIcon={<ArrowForwardIosTwoToneIcon />}
        >
          Login
        </Mui.Button>
      </div>
      <div className="signup-button">
        Create a Account
        <Mui.Button
          variant="outlined"
          sx={{ ml: 2 }}
          startIcon={<AccountCircleOutlinedIcon />}
        >
          Signup
        </Mui.Button>
      </div>
    </div>
  );
}

export default Login;
