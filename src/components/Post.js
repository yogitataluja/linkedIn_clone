import React,{forwardRef} from 'react'
import InputOption from './InputOption'
import './post.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
import ReplyIcon from '@material-ui/icons/Reply';
import SendIcon from '@material-ui/icons/Send';
import { Avatar } from '@material-ui/core'

const Post = forwardRef (({ name, description, message, photourl }, ref) => {
    return (
        <div ref={ref} className="post">
            <div className="post_header">
                <Avatar style={{height:"50px",width:"50px"}} className="podt_pic" src={photourl}>{description[0]}</Avatar>
                <div className="post_info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post_body">
                <p>{message}</p>
            </div>

            <div className="post_btn">
            <InputOption Icon={ThumbUpIcon} color="rgba(0, 0, 0, 0.6)" title="Like"/>
            <InputOption Icon={CommentIcon} color="rgba(0, 0, 0, 0.6)" title="Comment"/>
            <InputOption Icon={ReplyIcon} color="rgba(0, 0, 0, 0.6)" title="Share"/>
            <InputOption Icon={SendIcon} color="rgba(0, 0, 0, 0.6)" title="Send"/>
            </div>
        </div>
    )
})

export default Post
