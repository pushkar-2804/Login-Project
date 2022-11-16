import './signupForm.css'
import regnImage from '../images/regnImage.png'
import { NavLink } from 'react-router-dom'
const SignupForm = ()=>{
    return(
    <div className="wrap--Box">
        <div className='wrap--form'>
            <div className='wrap--signupImage'>
              <img src={regnImage} alt=''/>
            </div>
            <form className="form signupForm">
                <h2 className='formHeading'>Registration</h2>
                <div className="grid grid--col2 ">
                    {/* Name */}
                    <span className='wrap--regnInput'>
                        Name
                        <input type='text' placeholder='Name' className='borderInputBox'/>
                    </span>
        
                    {/* Roll Number */}
                    <span className='wrap--regnInput'>
                        Roll No.
                        <input type='number' placeholder='Roll no.' className='borderInputBox'/>
                    </span>
                    {/* Year */}
                    <span className='wrap--regnInput'>
                        Year
                        <select name="Year" className='borderInputBox'>
                            <option value='none'>--</option>
                            <option value='first-year'>First Year</option>
                            <option value='second-year'>Second Year</option>
                            <option value='third-year'>Third Year</option>
                            <option value='fourth-year'>Fourth Year</option>
                        </select>
                    </span>
                    {/* Branch */}
                    <span className='wrap--regnInput'>
                        Branch
                        <select name="Branch" className='borderInputBox'>
                            <option value="none">--</option>
                            <option value="CSE">CSE</option>
                            <option value="CSE-AIML">CSE-AIML</option>
                            <option value="CSE-DS">CSE-DS</option>
                            <option value="IT">IT</option>
                            <option value="CS">CS</option>
                            <option value="AIML">AIML</option>
                        </select>
                    </span>
                    {/* Email */}
                    <span className='wrap--regnInput'>
                    Email
                    <input type='email' placeholder='Email' className='borderInputBox'/></span>
                    {/* Mobile */}
                    <span className='wrap--regnInput'>Mobile<input type='number' placeholder='Mobile' className='borderInputBox'/></span>
                    {/* Password */}
                    <span className='wrap--regnInput'>Password<input type='password' placeholder='Password' className='borderInputBox'/></span>
                    {/* Confirm Password */}
                    <span className='wrap--regnInput'>Confirm Password<input type='password' placeholder='Confrim Password' className='borderInputBox'/></span>
                </div>
                {/* Gender */}
                <span className='wrap--regnInput'>
                    Gender
                    <span>
                        <input type='radio' name="gender" value='male'/>Male
                        <input type='radio' name="gender" value='female'/>Female
                        <input type='radio' name="gender" value='other'/>Other
                        <input type='radio' name="gender" value='prefer not to say'/>Prefer not to say
                    </span>
                </span>
                <span><input type='checkBox' />Remember Me?</span>
        
                    <button type='submit' className='btn--loginSubmit'>Register</button>
        
                      <span>Already have an account?<NavLink to='/'>Sign  in</NavLink></span>
            </form>
        </div>
    </div>)
}

export default SignupForm