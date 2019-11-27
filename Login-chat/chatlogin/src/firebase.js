// firebase.js
import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCvM02NlJMRVa-OJqsUlabfYd-xKEPS7Y0",
    authDomain: "chat-login-78455.firebaseapp.com",
    databaseURL: "https://chat-login-78455.firebaseio.com",
    projectId: "chat-login-78455",
    storageBucket: "",
    messagingSenderId: "939976299259",
    appId: "1:939976299259:web:fa2044300c75882277165e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;