import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import resetImage from "../images/resetImage.png";
import "./reset.css";
const ForgotPassword = () => {
  const nav = useNavigate();

  useEffect(() => {
    let resetKey = localStorage.getItem("resetKey");
    if (!resetKey) {
      nav("/login");
    }
  }, []);

  // Deleting reset key
  const delResetKeyFunction = () => {
    localStorage.removeItem("resetKey");
  };

  // const initialEmail = { email: "" };
  const [emailForReset, setEmailForReset] = useState("");
  // const [email, setEmail] = useState("");

  // Change Input
  const resetPassHandler = (e) => {
    // setEmail(e.target.value);
    setEmailForReset(e.target.value);
    // console.log(emailForReset);
  };
  // submit
  const resetPass = (e) => {
    e.preventDefault();
    // console.log(emailForReset);
    const emailObj = { email: emailForReset };
    console.log(emailObj);
    axios
      .post(`${process.env.REACT_APP_RESET}`, emailObj)
      .then((e) => console.log(e))
      .catch((error) => console.log(error));
  };

  return (
    <div className="wrap--Box">
      <div className="wrap--form">
        <div className="wrap--resetImage wrap--imageBackground">
          <img src={resetImage} alt="" />
        </div>
        <form className="form resetForm" onSubmit={resetPass}>
          <div className="wrap--Group">
            <h2 className="formHeading">Reset your password</h2>
            <p className="formSubHeading">
              The verification email will be sent to the mailbox.
              <br />
              Please check It{" "}
            </p>
          </div>
          {/* Email */}
          <div className="wrap--Group">
            Email
            <input
              type="email"
              placeholder="Please enter your email"
              className="borderInputBox resetBorderInputBox"
              onChange={resetPassHandler}
              value={emailForReset}
              name="email"
            />
          </div>

          <div className="wrap--Group">
            <button type="submit" className="btn--loginSubmit">
              Send
            </button>
            <NavLink to="/" onClick={delResetKeyFunction}>
              Back to Login
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
