import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDDHoTQHSJO9jsU_ElmlbGu6Q3SfL_PWsY",
    authDomain: "linkedin-clone-1f8d2.firebaseapp.com",
    projectId: "linkedin-clone-1f8d2",
    storageBucket: "linkedin-clone-1f8d2.appspot.com",
    messagingSenderId: "951276284021",
    appId: "1:951276284021:web:7ae9ae44e9ef0d212bf03c"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
  export { db, auth, provider }