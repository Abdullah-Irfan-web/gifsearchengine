import React, { useState } from 'react'
import Link from 'next/link'
import {auth} from '../firebase-config'

import Router from 'next/router';
import{ signInWithEmailAndPassword} from 'firebase/auth';
import Alert from 'react-popup-alert'

const Signup = () => {
    const [email,setEmail]=useState("");
    const[pass,setPass]=useState("");

    const [alert, setAlert] = React.useState({
        type: 'error',
        text: 'This is a alert message',
        show: false
      })
      function onCloseAlert() {
        setAlert({
          type: '',
          text: '',
          show: false
        })
      }
    
      function onShowAlert(type) {
        setAlert({
          type: type,
          text: 'Invalid Email/Password',
          show: true
        })
      }
    const login=async()=>{
        try{
            const user= await signInWithEmailAndPassword(auth,email,pass)
            console.log(user);
             sessionStorage.setItem('Auth Token', user._tokenResponse.refreshToken)

            Router.replace('/home')
        }
        catch(e){
            onShowAlert('warning')
        }
       
  
        
         }
  
  return (
    <div className="login-form">
     
       <div className="input-container">
         <label>Email </label>
         <input className='txt' type="text" name="uname" onChange={(event)=>setEmail(event.target.value)} required />
        
       </div>
       <div className="input-container">
         <label>Password </label>
         <input className='pass' type="password" name="pass" onChange={(event)=>setPass(event.target.value)} required />
        
       </div>
       <div className="button-container">
        <button onClick={login} className='sub'>Login</button>
       </div>
       <div className='log'>
        Don't have Account  <Link href="/">Register</Link>
       </div>
       <Alert
        header={'Message'}
        btnText={'Close'}
        text={alert.text}
        type={alert.type}
        show={alert.show}
        onClosePress={onCloseAlert}
        pressCloseOnOutsideClick={true}
        showBorderBottom={false}
        alertStyles={{}}
        headerStyles={{}}
        textStyles={{}}
        buttonStyles={{}}
      />
   </div>
       
  )
}

export default Signup
