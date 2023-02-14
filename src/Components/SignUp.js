import React, { useState } from "react";
import * as Mui from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowForwardIosTwoToneIcon from "@mui/icons-material/ArrowForwardIosTwoTone";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/auth-context";
import axios from "axios";
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [load, setLoad] = useState(false);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [validationError, setValidationError] = useState({
    fullName: false,
    email: false,
    password: false,
  });
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

  function validateData() {
    setValidationError({
      fullName: fullName.length === 0,
      email: email.length === 0,
      password: password.length === 0,
    });
  }
  function toggleAddressForm() {
    setShowAddressForm(!showAddressForm);
  }
  function handleSignUp() {
    validateData();
    setLoad(true);
    axios
      .post("https://jar-store-server.vercel.app/user/create", {
        fullName: fullName,
        email: email,
        password: password,
        address: [
          {
            houseNo: address[0].houseNo,
            area: address[0].area,
            landmark: address[0].landmark,
            city: address[0].city,
            state: address[0].state,
            pincode: address[0].pincode,
          },
        ],
      })
      .then((response) => {
        setLoad(false);
        setIsLoggedIn(true);
        navigate("/");
      })
      .catch((error) => {
        console.log("server error", error);
      });
  }
  return (
    <div className="login-container">
      <Mui.Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={load}
      >
        <Mui.CircularProgress color="inherit" />
      </Mui.Backdrop>
      <div className="login-fields-container">
        <Mui.TextField
          id="fullName"
          label="Full Name"
          variant="filled"
          className="login-fields"
          value={fullName}
          type="text"
          required={true}
          onChange={(event) => setFullName(event.target.value)}
          error={validationError.fullName}
          helperText={
            validationError.fullName && "Required, enter min. 3 characters"
          }
        />
        <Mui.TextField
          id="email"
          label="Email"
          variant="filled"
          className="login-fields"
          value={email}
          inputProps={{ inputMode: "email" }}
          required={true}
          onChange={(event) => setEmail(event.target.value)}
          error={validationError.email}
          helperText={validationError.email && "Required"}
        />
        <Mui.TextField
          id="password"
          className="login-fields"
          label="Password"
          variant="filled"
          type="password"
          required={true}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          error={validationError.password}
          helperText={validationError.password && "Required"}
        />
      </div>

      <Mui.Button onClick={toggleAddressForm} sx={{ mb: 2 }}>
        {showAddressForm ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        Add address
      </Mui.Button>
      {showAddressForm && (
        <div className="login-fields-container">
          <Mui.TextField
            id="house"
            label="HouseNo"
            variant="filled"
            className="login-fields"
            value={address.houseNo}
            type="text"
            onChange={(event) => {
              const updatedAddress = [...address];
              updatedAddress[0].houseNo = event.target.value;
              setAddress(updatedAddress);
            }}
          />
          <Mui.TextField
            id="area"
            label="Area"
            variant="filled"
            className="login-fields"
            value={address.area}
            type="text"
            onChange={(event) => {
              const updatedAddress = [...address];
              updatedAddress[0].area = event.target.value;
              setAddress(updatedAddress);
            }}
          />
          <Mui.TextField
            id="landmark"
            label="Landmark"
            variant="filled"
            className="login-fields"
            value={address.landmark}
            type="text"
            onChange={(event) => {
              const updatedAddress = [...address];
              updatedAddress[0].landmark = event.target.value;
              setAddress(updatedAddress);
            }}
          />
          <Mui.TextField
            id="city"
            label="City"
            variant="filled"
            className="login-fields"
            value={address.city}
            type="text"
            onChange={(event) => {
              const updatedAddress = [...address];
              updatedAddress[0].city = event.target.value;
              setAddress(updatedAddress);
            }}
          />
          <Mui.TextField
            id="state"
            label="State"
            variant="filled"
            className="login-fields"
            value={address.state}
            type="text"
            onChange={(event) => {
              const updatedAddress = [...address];
              updatedAddress[0].state = event.target.value;
              setAddress(updatedAddress);
            }}
          />
          <Mui.TextField
            id="pincode"
            label="Pincode"
            variant="filled"
            className="login-fields"
            value={address.pincode}
            onChange={(event) => {
              const updatedAddress = [...address];
              updatedAddress[0].pincode = event.target.value;
              setAddress(updatedAddress);
            }}
          />
        </div>
      )}
      <div className="login-buttons">
        <Mui.Button
          onClick={handleSignUp}
          variant="contained"
          endIcon={<ArrowForwardIosTwoToneIcon />}
          disabled={
            fullName.length === 0 || email.length === 0 || password.length < 4
          }
        >
          Create Account
        </Mui.Button>
      </div>
    </div>
  );
}

export default SignUp;
