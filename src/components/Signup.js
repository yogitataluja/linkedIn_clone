import React, { useState } from 'react'
import { auth } from '../firebase_auth/firebase'
import { useDispatch } from "react-redux"
import "./signup.css"
import { login } from '../features/userSlice'
const Signup = () => {
    const [fname, setFname] = useState("") // so check its not empty
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [profilepic, setProfilepic] = useState("")
    const dispatch = useDispatch() //this is a tool we gona use to set newvalue to the specific state we are maniupilating
    //use dispatch to put data in data layer(dispatch an action to store)
    const CreateAccount = (e) => {
        e.preventDefault()
        if (!fname || !email || !password) {
            alert("Please fill your form completely")
        }
        else{
            auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {   //to update name and profile pic to account
                userAuth.user.updateProfile({
                    displayName:`${fname} ${lname}`,
                    photoURL: profilepic
                })
                    .then(() => {          //push all information to redux
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName:`${fname} ${lname}`,
                            photoUrl: profilepic
    
                        }))
                    })
            }).catch((err) => alert(err.message))

        }
        
           
        
        

    }

    return (
        <div className="center" >
            <h4>Be great at what you do</h4>
            <h6>Get started - It's free.</h6>
            <div className="sign_up_form">
                <form >
                    <div className="form-group">
                        <label for="firstName">First Name</label>
                        <input name="fname" value={fname} onChange={(e) => setFname(e.target.value)} type="text" className="form-control" id="firstName" />
                    </div>
                    <div className="form-group">
                        <label for="lastName">Last Name</label>
                        <input name="lname" value={lname} onChange={(e) => setLname(e.target.value)} type="text" className="form-control" id="lastName" />
                    </div>
                    <div className="form-group">
                        <label for="profilePicture">Profile Picture(optional)</label>
                        <input name="profilepic" value={profilepic} onChange={(e) => setProfilepic(e.target.value)} type="text" className="form-control" id="profilePicture" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password(6 or more characters)</label>
                        <input name="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" onClick={CreateAccount} className="btn btn-primary mt-4">Create account</button>
                </form>
            </div>
        </div>
    )
}

export default Signup
