import firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBIeWVTugvEZBJhg0kyj83bgcnv1-TPy6s",
  authDomain: "vue-here.firebaseapp.com",
  databaseURL: "https://vue-here.firebaseio.com",
  projectId: "vue-here",
  storageBucket: "vue-here.appspot.com",
  messagingSenderId: "100525723474",
  appId: "1:100525723474:web:d4c4921c5d78b84b73b48b"
}


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;