import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { login, logout, selectUser } from './features/userSlice';
import Login from './components/Login';
import { auth } from './firebase_auth/firebase'
import Widgets from './components/Widgets';
function App() {
  const user = useSelector(selectUser) // pass our selector so we can select user that we created to pass in userSlice// pull user from  redux data layer to any component 

  // so that not logout when refresh
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {   //this is a listner which go head and listen to any sort of authetication change
      if (userAuth) {
        // login
        dispatch(login({  // store these value in redux store to firebase
            email: userAuth.email,   //these are payload
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL
          })
        )
      } else {
        // logout
        dispatch(logout())
      }
    }
    )
  },[])
  return (

    <div className="app">
      {!user ? (<Login />) :
        (<> <Header />
          <div className="app_body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
        )}

    </div>


  );
}

export default App;
