import React from 'react'
import { NavLink } from 'react-router-dom'
import resetImage from '../images/resetImage.png'
import './reset.css'
const ForgotPassword = () => {
  return (
    <div className='wrap--Box'>
        <div className='wrap--form'>
            <div className='wrap--resetImage wrap--imageBackground'>
                <img src={resetImage} alt=''/>
            </div>
            <form className="form resetForm">
                <div className="wrap--Group">
                  <h2 className='formHeading'>Reset your password</h2>
                  <p className='formSubHeading'>The verification email will be sent to the mailbox.
                  <br/>
                  Please check It </p>
                </div>
                {/* Email */}
                <div className='wrap--Group'>
                Email
                <input type='email' placeholder='Please enter your email' className='borderInputBox'/></div>
    
                <div className="wrap--Group">
                  <button type='submit' className='btn--loginSubmit'>Send</button>
                  <NavLink to='/'>Back to Login</NavLink>
                </div>
            </form>
        
        </div>
    </div>
  )
}

export default ForgotPassword