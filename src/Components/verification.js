import React from 'react'
import { NavLink , useNavigate} from 'react-router-dom'
import { useEffect } from 'react'
import './verification.css'
import successImage from '../images/successImage.png'

const Verification = () => {


  const nav = useNavigate();

    useEffect(()=>{
        let verificationKey = localStorage.getItem('verificationKey');
        if(!verificationKey){
            nav('/login')
        }
    },[])

    const remVerificationKeyFunction = ()=>{
      localStorage.removeItem('verificationKey');
    }

  return (
    <div className='wrap--Box'>
        <div className="wrap--verification">
          <div className="wrap--verificationImage "><img src={successImage}  /></div>
          <h2 className='centerHeading'>Congratulations <br/>
          You have successfully verified the account</h2>
          {/* <NavLink to='/bla'><button >Back to login page.</button></NavLink> */}
          <NavLink to='/' onClick={remVerificationKeyFunction}><button className='btn--loginSubmit' id='btn--verify'>Login</button></NavLink>
        </div>
    </div>
  )
}

export default Verification