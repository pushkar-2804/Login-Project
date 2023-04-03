import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
// import {  } from 'react-router-dom'
// import './verification.css'
import otpEnterImage from "../images/otpEnterImage.png";
import "./EnteredOtp.css";
// import { logoutFlag } from './Home'

// const otpInputBox = document.getElementById('otpInput');
const EnteredOtp = () => {
  const nav = useNavigate();

  console.log("hey");
  // Otp Protected routes
  useEffect(() => {
    let otpKey = localStorage.getItem("otpKey");
    if (!otpKey) {
      nav("/login");
    }
  }, []);

  const otpObject = {};

  const [otpVal, setOtpVal] = useState(otpObject);
  const [invalid, setInvalid] = useState(false);

  const handleOtpValue = (e) => {
    // console.log(e.target.value);
    // console.log('initial',otpVal);
    setOtpVal({ Otp: e.target.value.toString() });
    if (e.target.value.length === 4) e.target.blur();
    // console.log('final',otpVal);
  };

  const verifyOtp = (e) => {
    e.preventDefault();
    console.log(otpVal);
    const email = localStorage.getItem("email");
    otpVal.email = email;
    // axios.post(`${process.env.REACT_APP_OTP}`,otpVal)
    axios
      .patch(
        `https://loginsignup.onrender.com/api/auth/register/verify`,
        otpVal
      )
      .then((e) => {
        console.log(e);
        if (e.data.message === "Email Verified!!") {
          localStorage.removeItem("otpKey");
          localStorage.setItem("verificationKey", "active");
          nav("/verification");
        } else setInvalid(true);
      })
      .catch((error) => {
        console.log(error);
        setInvalid(true);
      });
  };

  return (
    <div className="wrap--Box">
      <div className="wrap--form wrap--EnteredOtp">
        <div className="wrap--EnteredOtpImage wrap--imageBackground">
          <img src={otpEnterImage} />
        </div>
        <form className="form EnteredOtp">
          <div className="wrap--Group">
            <h2 className="formHeading">Enter your OTP </h2>
            <p className="formSubHeading">
              Enter your Four digit OTP sent on your Email. It is valid for 5
              mins
            </p>
          </div>
          {/* Phone */}
          <div className="wrap--Group">
            <span className="marginLeft">OTP</span>
            <p className={invalid ? "invalidText" : "invisible"}>
              * Invalid Otp
            </p>

            <div class="flex otpNumber--Group">
              <input
                type="number"
                className="borderInputBox"
                id="otpInput"
                name="otpInput"
                onChange={handleOtpValue}
              />
            </div>
          </div>

          <div className="wrap--Group">
            <button
              type="submit"
              className="btn--loginSubmit"
              onClick={verifyOtp}
            >
              Verify
            </button>
            <NavLink to="/">Back to Login</NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnteredOtp;

//
