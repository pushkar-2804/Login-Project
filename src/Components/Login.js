import React, { useState, useEffect } from "react";
import "./login.css";
import loginImage from "../images/loginImage.png";
import userImage from "../images/userImage.svg";
import keyImage from "../images/keyImage.svg";
import eyeImage from "../images/eyeImage.svg";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
// import { logoutFlag } from './Home'
// import Home from './Home'

// const api=();

// const rememberMe = document.getElementById('rememberMe');

const Login = () => {
  // Remember Me
  let savedLoginVal = localStorage.getItem("savedLogin");
  const initialLoginValue = {
    username: savedLoginVal ? savedLoginVal.email : "",
    password: savedLoginVal ? savedLoginVal.password : "",
  };

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loginValues, setLoginValues] = useState(initialLoginValue);
  const [verified, setVerified] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [empty, setEmpty] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    let loginKey = localStorage.getItem("loginKey");
    if (!loginKey) {
      nav("/login");
    }
  }, []);

  function onChange(value) {
    // console.log("Captcha value:", value);
    setVerified(true);
    if (value === null) setVerified(false);
  }

  const eyeBtnHandler = (e) => {
    e.preventDefault();
    if (passwordVisible == true) setPasswordVisible(false);
    else setPasswordVisible(true);
  };

  function inputHandler(e) {
    setEmpty(false);
    setInvalid(false);
    const { name, value } = e.target;
    setLoginValues({ ...loginValues, [name]: value.trim() });
    // console.log(loginValues);
  }

  const registerKeyFunction = () => {
    localStorage.setItem("registerKey", "active");
  };
  const resetKeyFunction = () => {
    localStorage.setItem("resetKey", "active");
  };

  const submitLoginFunction = (e) => {
    console.log(loginValues);
    e.preventDefault();

    if (loginValues.username == "" || loginValues.password == "")
      setEmpty(true);
    if (verified === true && empty === false && invalid === false) {
      // if(empty===false && invalid===false){
      const loginObj = {
        email: loginValues.username,
        password: loginValues.password,
      };
      axios
        .post(`${process.env.REACT_APP_LOGIN}`, loginObj)
        .then((e) => {
          console.log("submitted");
          console.log(e);
          setLoginValues(initialLoginValue);
          axios
            .get(`https://loginsignup.onrender.com/api/auth/verifyToken`, {
              headers: {
                token: `Bearer ${e.data.accessToken}`,
              },
            })
            .then((eve) => {
              console.log(eve);
            })
            .catch((err) => {
              console.log(err);
            });
          if (e.data.accessToken) {
            localStorage.setItem("loginKey", JSON.stringify(e.data));

            // remember me
            // if(remeberMe.checked==true)
            //         console.log('checking remember me');
            // localStorage.setItem('savedLogin',JSON.stringify(loginObj));

            // logoutFlag= false;
            console.log(e.data.accessToken);
            nav("/");
          } else setInvalid(true);
        })
        .catch((error) => {
          console.log(error.message);
          setInvalid(true);
        });
      console.log(loginValues);
    }
  };

  return (
    <div className="wrap--Box">
      <div className="wrap--form">
        <div className=" wrap--imageBackground loginImage">
          <img src={loginImage} alt="" />
        </div>
        {/* <form className='form loginForm' onSubmit={handleSubmit}> */}
        <form className="form loginForm" onSubmit={submitLoginFunction}>
          <h2 className="formHeading">Login</h2>

          <p className={invalid ? "invalidText" : "invisible"}>
            Invalid Username or Password
          </p>
          <p className={empty ? "invalidText" : "invisible"}>
            Username or password can't be empty
          </p>
          {/* <p className={verified?'invalidText':'invisible'}>Captcha Error</p> */}

          {/* Username */}
          <span className="borderInput borderInputBox">
            <img src={userImage} alt="user" className="logo--login" />
            <input
              type="email"
              placeholder="Username"
              name="username"
              onChange={inputHandler}
              value={loginValues.username}
            />
          </span>

          {/* Password */}
          <span className="borderInput borderInputBox">
            <img src={keyImage} alt="password" className="logo--login" />
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              onChange={inputHandler}
              value={loginValues.password}
              name="password"
            />
            <button id="eyeBtn" onClick={eyeBtnHandler}>
              <img src={eyeImage} alt="password" className="logo--login" />
            </button>
          </span>
          {/* <button onClick={eyeBtnHandler}>{passwordVisible?element1:element2}</button> */}

          {/* Forgot Password */}

          <NavLink
            to="/reset"
            className="forgotPasswordText"
            onClick={resetKeyFunction}
          >
            Fogot Password?
          </NavLink>
          {/* <NavLink to='/ForgotPassword'><span>Forget Password?</span></NavLink> */}
          <div className="sameLevel">
            <ReCAPTCHA
              className="captchaLogin"
              sitekey={`${process.env.REACT_APP_SITE_KEY}`}
              onChange={onChange}
            />
          </div>
          {/* <div className='sameLevel rememberMe'>
              <span className='boxLevel'><input type='checkBox' />I'm not a robot</span>
              <span className='boxLevel'><input type='checkBox' id='rememberMe' name="rememberMe"/>Remember Me?</span>
            </div> */}
          <button type="submit" className="btn--loginSubmit marginTop">
            Sign In
          </button>
          <div>
            <span>
              Don't have a account?{" "}
              <NavLink to="/register" onClick={registerKeyFunction}>
                Register
              </NavLink>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
