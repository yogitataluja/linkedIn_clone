import { Avatar } from '@material-ui/core'
import React from 'react'
import './sidebar.css'
import { selectUser } from '../features/userSlice'
import { useSelector } from 'react-redux'

const Sidebar = () => {
    // pull user to use data of user
    const user= useSelector(selectUser)
    

    const recentItem = (topic)=> (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img src="https://images.unsplash.com/photo-1508615039623-a25605d2b022?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="profile background" />
                <div>
                <Avatar style={{width:"64px", height:"68px"}} className="sidebar_top_pic" src={user.photoUrl}>{user.email[0]}
                </Avatar>
                </div>
                <h2>{user.displayName}</h2>
                <p>{user.email}</p>
            </div>
            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed your profile</p>
                    <p className="sidebar_statNumber">11</p>
                </div>
                <div className="sidebar_stat">
                    <p>Views of your post</p>
                    <p className="sidebar_statNumber">35</p>
                </div>
            </div>

            <div className="sidebar_bottom">
                <h1>Recent </h1>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('developer')}
                {recentItem('design')}
            </div>
        </div>
    )
}

export default Sidebar
