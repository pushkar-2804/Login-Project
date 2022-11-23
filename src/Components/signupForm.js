import './signupForm.css'
import regnImage from '../images/regnImage.png'
import { NavLink, useNavigate } from 'react-router-dom'
// import {rPhone,rEmail, rName ,rPass} from '../regex'
import { useEffect, useState } from 'react';
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";


// Variable
const rPhone = /^[6-9]([0-9]){9}$/;
const rEmail = /^([a-zA-Z0-9._-]+)([@]{1})([a-zA-Z0-9-])+.([a-z]{2,10})(.[a-z]{2,8})$/;
const rName = /^([a-zA-Z ]{2,20})$/;
const rPass = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
const rRollNum = /^[0-9]{5,13}$/;

// const successRegister = (e)=>{
//     e.preventDefault();
//     console.log('hello');

// }

// const checking=()=>{
//     console.log('bla');
// }




const SignupForm = ()=>{
    const initalValues = {
        username:"",
        email:""
        ,mobile:""
        ,password:""
        ,confirmPassword:""
        ,rollNum:""
        ,year:""
        ,branch:""
        ,gender:""
    };


    
    
    const [formValues,setFormValues]=useState(initalValues);
    const [formErrors,setFormErrors]=useState({});
const [returnVal,setReturnVal]=useState(true);
const [verified,setVerified]=useState(false);
const [errorSubmit,setErrorSubmit]=useState(false);
const nav = useNavigate();

const handleChange = (e) => {
        
    const { name, value } = e.target;
    // console.log('check',formValues);         
    setFormValues({ ...formValues, [name]: value.trim() });
};


function onChange(value) {
    console.log("Captcha value:", value);
    setVerified(true);
    if(value==='null')
        setVerified(false);
  }


let ErrorObj= {};


    // console.log(ErrorObj);
    
    const submitHandler = (e)=>{
        e.preventDefault();
        setReturnVal(true);
        
            ErrorObj={};
    
    
            // console.log('yo');
            // console.log(formErrors);
            console.log('initial',formValues);
            // console.log(rName);
            
    
             // Checking name
            if(!(rName.test(formValues.username))){
                // console.log('username error');
                setReturnVal(false);   
                ErrorObj.nameError = "*Enter valid username";
            setFormErrors(ErrorObj);

                // setFormErrors(ErrorObj);
                // console.log(formErrors);
                // console.log('checked');
            }
    
    
             // Checking email
            if(!(rEmail.test(formValues.email))){
    
                setReturnVal(false);   
                ErrorObj.emailError = "*Enter Valid email";
            setFormErrors(ErrorObj);
                
                // setFormErrors({...formErrors,email:"*Enter Valid email"});
                // console.log(formErrors);
            }
    
    
             // Checking RollNumber
            if(!(rRollNum.test(formValues.rollNum))){
    
                setReturnVal(false);   
                ErrorObj.rollNumError = "*Enter Valid Roll number";
                setFormErrors(ErrorObj);
    
                // setFormErrors({...formErrors,rollNum:"*Enter Valid email"});
                // console.log(formErrors);
            }
             // Checking mobile
            if(!(rPhone.test(formValues.mobile))){
    
                setReturnVal(false);   
                ErrorObj.mobileError = "*Must contain 10 digits";
    
                // setFormErrors({...formErrors,mobile:"*Must contain 10 digits"});
                // console.log(formErrors);
            }
             // Checking Password
             if(!(rPass.test(formValues.password))){
                 
                 setReturnVal(false);   
                ErrorObj.passwordError = "*Must contain 1 uppercase,lowercase, special charcter";
            setFormErrors(ErrorObj);

                // setFormErrors({...formErrors,password:"*Enter Valid Password"});
                // console.log(formErrors);
            }
             // Checking confirm password
            if(formValues.password!==formValues.confirmPassword){
    
                ErrorObj.confirmPasswordError = "*Password doesn't match";
                // setFormErrors({...formErrors,confirmPassword:"*Password doesn't match"});
                setReturnVal(false);   
            setFormErrors(ErrorObj);

                // console.log(formErrors);
            }
            
            // Year
            if(formValues.year==''){
                setReturnVal(false);
                ErrorObj.yearError = "*Select a year"
            setFormErrors(ErrorObj);

            }  
                // console.log('year me error');
                // console.log('jjgjgjgkg',formValues.year,'chek');
               
                
                // Branch
            if(formValues.branch==''){
                setReturnVal(false);
                ErrorObj.branchError = "*Select a Branch"
            setFormErrors(ErrorObj);

            }

            if(formValues.gender===''){
                setReturnVal(false);
                ErrorObj.genderError = "* Select an option"
                setFormErrors(ErrorObj);
                setFormErrors(ErrorObj);
                
            }
            
            
            if(verified===false)
                ErrorObj.captchaError = "* Captcha not verified"

                // console.log('branch me error');
            // console.log('jjgjgjgkg',formValues.year,'chek');
            console.log(ErrorObj);
            setFormErrors(ErrorObj);
            console.log('checking Form Error',formErrors);
            console.log(returnVal);
            
            
            if(returnVal && verified){
                
                const dataCheck={
                    "fullname": formValues.username,
                    "rollno":formValues.rollNum.toString(),
                    // "year": "2",
                    "year": formValues.year,
                    "branch": formValues.branch,
                    "gender": formValues.gender,
                    "mobno":formValues.mobile.toString(),
                    "email":formValues.email,
                    "password": formValues.password,
                    "password2":formValues.confirmPassword,
                };
                console.log(dataCheck);
                // const data={
                //     // username: formValues.username,
                //     email:formValues.email,
                //     password: formValues.password,
                //     cpassword:formValues.confirmPassword,
                //     // rollNo:formValues.rollNum,
                //     // branch: formValues.branch,
                //     // year: formValues.year,
                //     // mobile:formValues.mobile,
                //     // gender: formValues.gender
                // };
                console.log('yay');
                // axios.post('https://curdapibyanirudh.herokuapp.com/register',
                // data 

                axios.post("https://authentiction-app.herokuapp.com/register",
                dataCheck   
            )       
                // axios.post(`${process.env.REACT_APP_REGISTER}`,dataCheck)  

            
            .then((e)=>{
                // console.log(dataCheck);
                console.log(e);
                console.log('success:',e.data.success);
                if(e.data.success===true)
                    nav('/enterOtp');
                // console.log(data);
                // setFormValues(initalValues)
                
            }
            
            )
            .catch(
                (error)=> {
                    // console.log(dataCheck);
                    setErrorSubmit(true);
                    // console.log(data);
                    console.log(error)}
                );
            }
            else{
                console.log('Data not correct');
            }
        } 

        
    return(
        <div className="wrap--Box">
        <div className='wrap--form'>
            <div className='wrap--signupImage wrap--imageBackground'>
              <img src={regnImage} alt=''/>
            </div>
            <form className="form signupForm" onSubmit={submitHandler}>
                <h2 className='formHeading'>Registration</h2>
                        <span className='errorText bigText'>{errorSubmit?'*Error occured in submitting the form':''}</span>
                <div className="grid grid--col2 ">


                    {/* Name */}
                    <span className='wrap--regnInput'>
                        Full Name
                        <input type='text' placeholder='Please enter your name' className='borderInputBox' id='name'  value={formValues.username} onChange={handleChange} name='username' required autoComplete='off'/>
                        <span className='errorText'>{formErrors.nameError}</span>
                    </span>
        

                    {/* Roll Number */}
                    <span className='wrap--regnInput'>
                        Roll No.
                        <input type='number' placeholder='Please enter your Roll no' className='borderInputBox' name='rollNum'  value={formValues.rollNum} onChange={handleChange} required autoComplete='off'/>
                        <span className='errorText'>{formErrors.rollNumError}</span>
                    </span>


                    {/* Year */}
                    <span className='wrap--regnInput'>
                        Year
                        <select name="year" className='borderInputBox' id='Year' onChange={handleChange}>
                            <option className='year' value=''>--Please select--</option>
                            <option className='year' value='1'>First Year</option>
                            <option className='year' value='2'>Second Year</option>
                            <option className='year' value='3'>Third Year</option>
                            <option className='year' value='4'>Fourth Year</option>
                        </select>
                        <span className='errorText'>{formErrors.yearError}</span>
                    </span>


                    {/* Branch */}
                    <span className='wrap--regnInput'>
                        Branch
                        <select name="branch" id='Branch' className='borderInputBox' onChange={handleChange}>
                            <option className='branch' value="">--Please select--</option>
                            <option className='branch' value="CSE">CSE</option>
                            <option className='branch' value="CSE-AIML">CSE-AIML</option>
                            <option className='branch' value="CSE-DS">CSE-DS</option>
                            <option className='branch' value="IT">IT</option>
                            <option className='branch' value="CS">CS</option>
                            <option className='branch' value="AIML">AIML</option>
                        </select>
                        <span className='errorText'>{formErrors.branchError}</span>
                    </span>
                    {/* Email */}
                    <span className='wrap--regnInput'>
                    Email
                    <input type='email' placeholder='Please enter your email' className='borderInputBox' name='email'  value={formValues.email} onChange={handleChange} required autoComplete='off'/>
                        <span className='errorText'>{formErrors.emailError}</span>
                    </span>
                    {/* Mobile */}
                    <span className='wrap--regnInput'>Mobile<input type='number' placeholder='Please enter your mobile no' className='borderInputBox' name='mobile'  value={formValues.mobile} onChange={handleChange} required autoComplete='off'/>
                        <span className='errorText'>{formErrors.mobileError}</span>
                    </span>
                    {/* Password */}
                    <span className='wrap--regnInput'>Password<input type='password' placeholder='Please enter your password' className='borderInputBox' name='password'  value={formValues.password} onChange={handleChange}/>
                        <span className='errorText'>{formErrors.passwordError}</span>
                    </span>
                    {/* Confirm Password */}
                    <span className='wrap--regnInput'>Confirm Password<input type='password' placeholder='Re-enter the same password' className='borderInputBox' name='confirmPassword' value={formValues.confirmPassword} onChange={handleChange}/>
                    <span className='errorText'>{formErrors.confirmPasswordError}</span>
                    </span>
                </div>
                {/* Gender */}
                <span className='wrap--regnInput'>
                    Gender
                    <span id='genderBox' onChange={handleChange}>
                        <span><input type='radio' className='gender' name="gender" value='male'/>Male</span>
                        <span><input type='radio' className='gender' name="gender" value='female'/>Female</span>
                        <span><input type='radio' className='gender' name="gender" value='other'/>Other</span>
                        <span><input type='radio' className='gender' name="gender" value='prefer not to say'/>Prefer not to say</span>
                    </span>
                    <span className='errorText'>{formErrors.genderError}</span>
                </span>
                {/* <span><input type='checkBox' />Remember Me</span> */}
                <ReCAPTCHA className='captchaSignup'
                  sitekey={`${process.env.REACT_APP_SITE_KEY}`}
                   onChange={onChange}/>
                    <span className='errorText'>{formErrors.captchaError}</span>
                    <button type='submit' className='btn--loginSubmit' >Register</button>
                    {/* <NavLink to='/enterOtp'>
                    </NavLink> */}
        
                      <span>Already have an account?<NavLink to='/'>Sign  in</NavLink></span>
            </form>
        </div>
    </div>)
}

export default SignupForm