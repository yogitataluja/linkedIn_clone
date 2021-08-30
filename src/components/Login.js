import React, { useState } from 'react'
import "./login.css"
import logo from "../images/logo.png"
import { auth } from '../firebase_auth/firebase'
import Signup from './Signup'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'

const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const dispatch = useDispatch()

    const logIntoApp = (e) => {
        e.preventDefault()
      auth.signInWithEmailAndPassword(email, password)
      .then((userAuth)=>{
          dispatch(login({
            email: userAuth.user.email,   //these are payload
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL
          }))
      }).catch(error => alert(error.message))
    }
    
    return (
        <div className="login_page">
            {/* for sign in */}
            <div className="signin">
                <img src={logo} alt="logo" />
                <form className="form" action="">
                    <input onChange={(e) => setEmail(e.target.value)} type="text" name="email" value={email} placeholder="Email" />
                    <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" value={password} placeholder="Password" />
                    <button className="btn" onClick={logIntoApp} type="submit">Sign in</button>
                </form>
            </div>
            {/* For Create new account */}
            <div className="sign_up">
                <Signup/>
            </div>


        </div>
    )
}

export default Login
