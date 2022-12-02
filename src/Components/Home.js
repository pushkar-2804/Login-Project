import React, { useState } from 'react'
import './Home.css'
import userIcon from '../images/userIcon.svg'
import { NavLink } from 'react-router-dom'
import menuClose from '../images/closeTheMenu.svg'
import axios from 'axios'


export let logoutFlag = false;
const Home = () => {

  // const x = {};
  function deleteLoginKey(){
    localStorage.removeItem('loginKey');
    // logoutFlag = true;
    axios.get(`${process.env.REACT_APP_LOGOUT}`)
    .then((e)=>{console.log('done');
  console.log(e);})
    .catch((error)=>console.log(error))
  }
  
  const [navOpen,setNavOpen]=useState(false);
  const hideNav=()=>{
    if(navOpen===true)
      setNavOpen(false);
    else
      setNavOpen(true);
  }
  return (
    // <div><button>Logout</button></div>
    <>
      {/* <div class="wrap--Box"> */}
        <div className="wrap--Home">
          <nav className='navLinks'>
            {/* <button className='navClose' onClick={hideNav}>-</button> */}
            <button className='navClose' onClick={hideNav}><img src={menuClose} alt='openNav'/></button>
            <div className={navOpen?"navBar":'navBar invisible'}>
              <NavLink to='/'><span>Home</span></NavLink>
              <NavLink to='/'><span>Services</span></NavLink>
              <a href='https://pushkar-portfolio.netlify.app/'><span>Portfolio</span></a>
              <a href="https://team-csi-trainees.github.io/Pushkar-ContactForm/"><span>Contact Us</span></a>
              <NavLink to='/login'><span onClick={deleteLoginKey}>Logout </span></NavLink>
              <NavLink to='/'><img src={userIcon} id='logoutUserImage'/></NavLink>
            </div>
          </nav>
          <div className="homeContent">
            <h2 className='homeHeading'>Welcome To Our Website</h2>
            <button id='homeButton'>JOIN NOW</button>
          </div>
        </div>
      {/* </div> */}
    </>
  )
}

export default Home