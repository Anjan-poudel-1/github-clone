import  firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';
var firebaseConfig = {
    apiKey: "AIzaSyAJoH9I3eyuLpLOcqAVjkARNgMq1K6lXN4",
    authDomain: "clone-eb201.firebaseapp.com",
    projectId: "clone-eb201",
    storageBucket: "clone-eb201.appspot.com",
    messagingSenderId: "508624266473",
    appId: "1:508624266473:web:6b9b60874a158f0627fc78"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 const firestore = firebase.firestore();
 const auth = firebase.auth();
 const provider = new firebase.auth.GoogleAuthProvider();
 const storage = firebase.storage();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export {storage,firestore,auth,provider,timestamp}