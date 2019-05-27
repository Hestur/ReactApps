import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCcgXAitQinuroNgeZyRnMWyrQEGdqvmmM",
    authDomain: "hest-marioplan.firebaseapp.com",
    databaseURL: "https://hest-marioplan.firebaseio.com",
    projectId: "hest-marioplan",
    storageBucket: "hest-marioplan.appspot.com",
    messagingSenderId: "938975609451"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true});
  
  export default firebase;