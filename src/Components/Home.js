import React, { useState } from 'react'
import './Home.css'
import userIcon from '../images/userIcon.svg'
import { NavLink } from 'react-router-dom'
import menuClose from '../images/closeTheMenu.svg'

const Home = () => {


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
            <button className='navClose' onClick={hideNav}><img src={menuClose} alt='openNav'/></button>
            <div className={navOpen?"navBar":'navBar invisible'}>
              <NavLink to='/home'><span>Home</span></NavLink>
              <NavLink to='/home'><span>Services</span></NavLink>
              <NavLink to='/home'><span>Portfolio</span></NavLink>
              <NavLink to='/home'><span>Contact Us</span></NavLink>
              <NavLink to='/home'><span>Logout </span></NavLink>
              <NavLink to='/home'><img src={userIcon} id='logoutUserImage'/></NavLink>
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