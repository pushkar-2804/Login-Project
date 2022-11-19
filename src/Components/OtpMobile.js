import React from 'react'
import { NavLink } from 'react-router-dom'
// import './verification.css'
import otpMobileImage from '../images/otpMobileImage.png'
import './otpMobile.css'

const OtpMobile = () => {
  return (
    
    <div className='wrap--Box'>
        <div className='wrap--form wrap--otpMobile'>
            <div className="wrap--OtpMobileImage">
                <img src={otpMobileImage}  />
            </div>
            <form className="form otpMobile">
                <div className="wrap--Group">
                  <h2 className='formHeading'>Otp Verification </h2>
                  <p className='formSubHeading'>An OTP has been sent on your Mobile Number. 
                    It is valid for 10 mins only</p>
                </div>
                {/* Phone */}
                <div className='wrap--Group'>
                Phone Number
                <input type='number' placeholder='Please enter your valid phone number' className='borderInputBox'/></div>
    
                <div className="wrap--Group">
                  <button type='submit' className='btn--loginSubmit'>Send Otp</button>
                  <NavLink to='/'>Back to Login</NavLink>
                </div>
            </form>
        </div>
    </div>
  )
}

export default OtpMobile


// 



