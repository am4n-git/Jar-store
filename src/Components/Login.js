import React from "react";
import * as Mui from "@mui/material";
import ArrowForwardIosTwoToneIcon from "@mui/icons-material/ArrowForwardIosTwoTone";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

function Login() {
  return (
    <div className="login-container">
      <Mui.TextField id="filled-basic" label="Email" variant="filled" />
      <br />
      <Mui.TextField id="filled-basic" label="Password" variant="filled" />
      <br />
      <Mui.Button variant="contained" endIcon={<ArrowForwardIosTwoToneIcon />}>
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
