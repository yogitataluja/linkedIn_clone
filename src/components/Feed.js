import React, { useState, useEffect } from 'react'
import './feed.css'
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import PhotoIcon from '@material-ui/icons/Photo';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventIcon from '@material-ui/icons/Event';
import ArtTrackIcon from '@material-ui/icons/ArtTrack';
import Post from './Post';
import { db } from '../firebase_auth/firebase'
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import FlipMove from 'react-flip-move';
import { Avatar } from '@material-ui/core';

const Feed = () => {
    const [input, setInput] = useState("")
    const [posts, setPosts] = useState([])
    const user = useSelector(selectUser)
    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) =>
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                }))
            ))

    }, [])

    const sendPost = (e) => {
        e.preventDefault();
        if (!input) {
            alert("Type something")
        } else {
            db.collection("posts").add({
                name: user.displayName,
                description: user.email,
                message: input,
                photourl: user.photoUrl || user.displayName[0],
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })
            setInput("")
        }

    }
    return (
        <div className="feed">
            <div className="feed_inputcontainer">
                <div className="feed_dp">
                    <Avatar className="post_pic" src={user.photoUrl} />
                    <div className="feed_input">
                        <CreateIcon />
                        <form >
                            <input value={input} name="message" onChange={(e) => setInput(e.target.value)} type="text" placeholder="Start a post" />
                            <button onClick={sendPost} type="submit">Post</button>
                        </form>
                    </div>
                </div>
                <div className="feed_inputOption">
                    <InputOption Icon={PhotoIcon} color="#70B5F8" title="Photo" />
                    <InputOption Icon={YouTubeIcon} color="#7FC15E" title="Video" />
                    <InputOption Icon={EventIcon} color="#E7A33E" title="Event" />
                    <InputOption Icon={ArtTrackIcon} color="#F19194" title="Write article" />
                </div>



            </div>

            <FlipMove>
                {posts.map(({ id, data: { name, description, message, photourl } }) => (
                    <Post
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photourl={photourl}
                    />
                ))}

            </FlipMove>



        </div>
    )
}

export default Feed
