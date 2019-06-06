import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'
// Initialize Firebase
var config = {
  apiKey: "AIzaSyBwPT0PoCy0KYKUHxCLJbxQ_R6jTUMOJ_Y",
  authDomain: "elefcodes-marioplan.firebaseapp.com",
  databaseURL: "https://elefcodes-marioplan.firebaseio.com",
  projectId: "elefcodes-marioplan",
  storageBucket: "",
  messagingSenderId: "876456258909"
};
firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;