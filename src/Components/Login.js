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
      <Mui.TextField id="filled-basic" label="Email" variant="filled" />
      <br />
      <Mui.TextField
        id="filled-basic"
        label="Password"
        variant="filled"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <br />
      <Mui.Button
        onClick={handleLogin}
        variant="contained"
        endIcon={<ArrowForwardIosTwoToneIcon />}
      >
        Login
      </Mui.Button>
      <br />
      or, <span>Create a Account</span>{" "}
      <Mui.Button variant="outlined" startIcon={<AccountCircleOutlinedIcon />}>
        Signup
      </Mui.Button>
    </div>
  );
}

export default Login;
