import React from 'react'
import { NavLink } from 'react-router-dom'
// import './verification.css'
import otpEnterImage from '../images/otpEnterImage.png'
import './EnteredOtp.css'

const EnteredOtp = () => {
  return (
    
    <div className='wrap--Box'>
        <div className='wrap--form wrap--EnteredOtp'>
            <div className="wrap--EnteredOtpImage wrap--imageBackground">
                <img src={otpEnterImage}  />
            </div>
            <form className="form EnteredOtp">
                <div className="wrap--Group">
                  <h2 className='formHeading'>Enter your OTP </h2>
                  <p className='formSubHeading'>Enter your Six digit OTP sent on your Phone Number.
                    It is valid for 10 mins</p>
                </div>
                {/* Phone */}
                <div className='wrap--Group'>
                OTP
                <div class="flex otpNumber--Group">
                    <input type='number' className='borderInputBox'/>
                    <input type='number' className='borderInputBox'/>
                    <input type='number' className='borderInputBox'/>
                    <input type='number' className='borderInputBox'/>
                    <input type='number' className='borderInputBox'/>
                    <input type='number' className='borderInputBox'/>
                </div>
                
                </div>
    
                <div className="wrap--Group">
                  <button type='submit' className='btn--loginSubmit'>Send Otp</button>
                  <NavLink to='/'>Back to Login</NavLink>
                </div>
            </form>
        </div>
    </div>
  )
}

export default EnteredOtp


// 



