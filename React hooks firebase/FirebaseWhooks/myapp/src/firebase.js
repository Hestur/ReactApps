import firebase from "firebase/app";
import 'firebase/firestore';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCcujeZgiRdtWp-VT7qQcMKF7JPo1NzOtE",
    authDomain: "react-hooks-firebase-eed2e.firebaseapp.com",
    databaseURL: "https://react-hooks-firebase-eed2e.firebaseio.com",
    projectId: "react-hooks-firebase-eed2e",
    storageBucket: "",
    messagingSenderId: "154773416869",
    appId: "1:154773416869:web:f2a34dd39f98d1e872d64c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;