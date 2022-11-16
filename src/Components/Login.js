import React from 'react'
import './login.css'
import loginImage from '../images/loginImage.png'
import userImage from '../images/userImage.svg'
import keyImage from '../images/keyImage.svg'
import eyeImage from '../images/eyeImage.svg'
import reCAPTCHA from "react-google-recaptcha"
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div className="wrap--Box">
      <div className="wrap--form">
        <div className='wrap--loginImage'>
          <img src={loginImage} alt=''/>
        </div>
        <form className='form loginForm'>
            <h2 className='formHeading'>Login</h2>

            {/* Username */}
            <span className='borderInput borderInputBox'>
              <img src={userImage} alt='user' className='logo--login'/>
              <input type='text' placeholder='Username'/>
            </span>


            {/* Password */}
            <span className='borderInput borderInputBox'>
              <img src={keyImage} alt='password'  className='logo--login'/>
              <input type='password' placeholder='Password'/>
              <img src={eyeImage} alt='password'  className='logo--login'/>
            </span>


            {/* Forgot Password */}

            <NavLink to='/reset'>Fogot Password?</NavLink>
              {/* <NavLink to='/ForgotPassword'><span>Forget Password?</span></NavLink> */}
            <div className='sameLevel'>
              {/* <span className='boxLevel'><input type='checkBox' />I'm not a robot</span> */}
              <reCAPTCHA />
              <span className='boxLevel'><input type='checkBox' />Remember Me?</span>
            </div>
            <button type='submit' className='btn--loginSubmit'>Sign In</button>
            <div>
              <span>Don't have a account? <NavLink to='/register'>Register</NavLink></span>
            </div>
            {/* <button>Sign Up</button> */}
        </form>
      </div>
    </div>
  )
}

export default Login;





{/* <BrowserRouter>
    <Router>
        <Route path='/' exact element={<Login/>}/>
        <Route path='/FogotPassword' exact element={<ForgotPassword/>}/>
        <Route path='/Home' exact element={<Home/>}/>
        <Route path='/SignupForm' exact element={<SignupForm/>}/>
        <Route path='/Verification' exact element={<Verification/>}/>
    </Router>
</BrowserRouter> */}