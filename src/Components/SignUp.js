import React, { useState } from "react";
import * as Mui from "@mui/material";
import ArrowForwardIosTwoToneIcon from "@mui/icons-material/ArrowForwardIosTwoTone";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/auth-context";
import axios from "axios";
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState([
    {
      houseNo: "",
      area: "",
      landmark: "",
      city: "",
      state: "",
      pincode: "",
      defaultAddress: true,
    },
  ]);
  // const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { setIsLoggedIn } = useAuth();

  // function showPasswordHandle() {
  //   setShowPassword(true);
  // }

  function handleSignUp() {
    axios
      .post("http://localhost:3000/user/create", {
        fullName: fullName,
        email: email,
        password: password,
        address: [
          {
            houseNo: address.houseNo,
          },
        ],
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("server error", error);
      });
  }
  return (
    <div className="login-container">
      <div className="login-fields-container">
        <Mui.TextField
          id="fullName"
          label="Full Name"
          variant="filled"
          className="login-fields"
          value={fullName}
          type="text"
          onChange={(event) => setFullName(event.target.value)}
        />
        <Mui.TextField
          id="email"
          label="Email"
          type="email"
          variant="filled"
          className="login-fields"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Mui.TextField
          id="password"
          className="login-fields"
          label="Password"
          variant="filled"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        >
          <Mui.IconButton></Mui.IconButton>
        </Mui.TextField>
        <Mui.TextField
          id="house"
          label="HouseNo."
          variant="filled"
          className="login-fields"
          value={address.houseNo}
          type="text"
          onChange={(event) =>
            setAddress((houseNo) => ({
              ...address.houseNo,
            }))
          }
        />
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
