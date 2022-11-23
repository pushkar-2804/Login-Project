import SignupForm from './Components/signupForm'
import Verification from './Components/verification';
import Reset from './Components/reset';
import Home from './Components/Home';
import Login from './Components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import OtpMobile from './Components/OtpMobile';
import EnteredOtp from './Components/EnteredOtp';



function App(){
    return <>
        
        <BrowserRouter>
            <Routes>
                <Route path='/'  element={<Login/>}/>
                <Route path='/verification'  element={<Verification/>}/>
                <Route path='/reset'  element={<Reset/>}/>
                <Route path='/home'  element={<Home/>}/>
                <Route path='/register' element={<SignupForm/>}/>
                <Route path='/enterOtp' element={<EnteredOtp/>}/>
                {/* <Route path='/mobileOtp' element={<OtpMobile/>}/> */}
                {/* <Route path='/home' element={<Home/>}/> */}
            </Routes>
        </BrowserRouter>
    </>
    
}

export default App;