import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate , NavLink } from 'react-router-dom'
// import {  } from 'react-router-dom'
// import './verification.css'
import otpEnterImage from '../images/otpEnterImage.png'
import './EnteredOtp.css'


// const otpInputBox = document.getElementById('otpInput');
const EnteredOtp = () => {

  const otpObject={'otp':'5'};

  const [otpVal,setOtpVal] = useState(otpObject);
  const [invalid,setInvalid] = useState(false);


  
  const handleOtpValue = (e)=>{
    // console.log(e.target.value);
    // console.log('initial',otpVal);
    setOtpVal({otp: e.target.value});
    if(e.target.value.length===4)
        e.target.blur();
    // console.log('final',otpVal);

  }
  
  const nav = useNavigate();

  
  const verifyOtp = (e)=>{
    e.preventDefault();
    console.log(otpVal);
    axios.post(`{process.env.REACT_APP_VERIFYOTP}`,otpVal)
    .then((e)=>{
      console.log(e);
      if(e.data===true)
        nav('/verification');
      else
        setInvalid(true);
    })
    .catch((error)=>{
      console.log(error);
      setInvalid(true);
    })
  };
  

  return (
    
    <div className='wrap--Box'>
        <div className='wrap--form wrap--EnteredOtp'>
            <div className="wrap--EnteredOtpImage wrap--imageBackground">
                <img src={otpEnterImage}  />
            </div>
            <form className="form EnteredOtp">
                <div className="wrap--Group">

                  <h2 className='formHeading'>Enter your OTP </h2>
                  <p className='formSubHeading'>Enter your Four digit OTP sent on your Email.
                    It is valid for 10 mins</p>
                </div>
                {/* Phone */}
                <div className='wrap--Group'>
                        <span className='marginLeft'>OTP</span>
            <p className={invalid?'invalidText':'invisible'}>* Invalid Otp</p>
                    
                        <div class="flex otpNumber--Group">
                            <input type='number' className='borderInputBox' id='otpInput' name='otpInput' onChange={handleOtpValue}/>
                        </div>

                    
                </div>
    
                <div className="wrap--Group">
                  <button type='submit' className='btn--loginSubmit' onClick={verifyOtp}>Verify</button>
                  <NavLink to='/'>Back to Login</NavLink>
                </div>
            </form>
        </div>
    </div>
  )
}

export default EnteredOtp


// 



