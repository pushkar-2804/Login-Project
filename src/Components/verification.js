import React from 'react'
import { NavLink } from 'react-router-dom'
import './verification.css'
import successImage from '../images/successImage.png'

const Verification = () => {
  return (
    <div className='wrap--Box'>
        <div className="wrap--verification">
          <div className="wrap--verificationImage "><img src={successImage}  /></div>
          <h2 className='centerHeading'>Congratulations <br/>
          You have successfully verified the account</h2>
          {/* <NavLink to='/bla'><button >Back to login page.</button></NavLink> */}
          <NavLink to='/'><button className='btn--loginSubmit' id='btn--verify'>Login</button></NavLink>
        </div>
    </div>
  )
}

export default Verification