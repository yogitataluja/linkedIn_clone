import React from 'react'
import './headeroption.css'
import Avatar from '@material-ui/core/Avatar';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
const HeaderOption = ({avatar, Icon, title, onClick}) => {
    const user= useSelector(selectUser)

    return (
        <div onClick={onClick} className="headeroption">
        {Icon && <Icon className="headeroption_icon"/>}
        {avatar && <Avatar className="headeroption_icon" src={user?.photoUrl}>{user.email[0]}</Avatar> }
       {title && <h3 className="headeroption_title">{title} </h3>}
        </div>
    )
}

export default HeaderOption
