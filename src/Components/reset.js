import React from 'react'
import { NavLink } from 'react-router-dom'
import resetImage from '../images/resetImage.png'
import './reset.css'
const ForgotPassword = () => {
  return (
    <div className='wrap--Box'>
        <div className='wrap--form'>
            <div className='wrap--resetImage'>
                <img src={resetImage} alt=''/>
            </div>
            <form className="form resetForm">
                <div className="wrap--resetGroup">
                  <h2 className='formHeading'>Reset your password</h2>
                  <p>The verification email will be sent to the mailbox.
                  <br/>
                  Please check It </p>
                </div>
                {/* Email */}
                <div className='wrap--resetGroup'>
                Email
                <input type='email' placeholder='Email' className='borderInputBox'/></div>
    
                <div className="wrap--resetGroup">
                  <button type='submit' className='btn--loginSubmit'>Send</button>
                  <NavLink to='/'>Back to Login</NavLink>
                </div>
            </form>
        
        </div>
    </div>
  )
}

export default ForgotPassword