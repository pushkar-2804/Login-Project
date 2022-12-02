import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import { logoutFlag } from './Home'


const ProtectedRoutes = (props) => {
  
    const {Component} = props;
    const nav = useNavigate();
    
    useEffect(()=>{

        // Home 
        let loginKey = localStorage.getItem('loginKey');
        if(!loginKey){
            nav('/login')
            // nav('/')
        }

        
    });
    return (
    <div>
        <Component />
    </div>
  )
}

export default ProtectedRoutes