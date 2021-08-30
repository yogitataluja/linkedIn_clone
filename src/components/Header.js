import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import logo from "../images/linkedin.png"
import './header.css'
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import WorkIcon from '@material-ui/icons/Work';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from "../firebase_auth/firebase"
import { logout, selectUser } from "../features/userSlice"

const Header = () => {

// pull user to use data of user
const user= useSelector(selectUser)
// for logout when click on logout
const dispatch = useDispatch();
console.log(user)
 const logoutOfApp = ()=> {
    dispatch(logout()) //to tell redux that we logout
    auth.signOut() //for signout from firebase 
 }
    return (
        <div className="header"> 
           <div className="header_left">
               <img src={logo} alt="logo"/>
               <div className="header_search">
                <SearchIcon/>
               <input type="text" placeholder="Search" />
               </div>
               
           </div>
           <div className="header_right">
               <HeaderOption Icon={HomeIcon} title="Home"/>
               <HeaderOption Icon={GroupIcon} title="My Network"/>
               <HeaderOption Icon={WorkIcon} title="Job"/>
               <HeaderOption Icon={ChatIcon} title="Messaging"/>
               <HeaderOption Icon={NotificationsIcon} title="Notification"/>
               <HeaderOption avatar={true} title="Me"/>
               <HeaderOption Icon={ExitToAppIcon} title="Sign Out" onClick={logoutOfApp}/>
           </div>
        </div>
    )
}

export default Header
 