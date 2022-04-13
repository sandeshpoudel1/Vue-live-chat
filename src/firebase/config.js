import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBHSJNh_LEgdOy7MyTDxuGq8BjqGXC25Ig",
    authDomain: "live-chat-b980e.firebaseapp.com",
    projectId: "live-chat-b980e",
    storageBucket: "live-chat-b980e.appspot.com",
    messagingSenderId: "495128536215",
    appId: "1:495128536215:web:29fcb2c5b965e17574f5d2",
    measurementId: "G-5QCFPT6469"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)
  const projectAuth=firebase.auth()
  const projectFirestore= firebase.firestore()
  const timestamp= firebase.firestore.FieldValue.serverTimestamp

  export { projectAuth,projectFirestore, timestamp}