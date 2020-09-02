import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDg1iGmhnJ8m9qEZlyJZxX3t0ocHh86zzE",
    authDomain: "facebook-messenger-clone-fb57c.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-fb57c.firebaseio.com",
    projectId: "facebook-messenger-clone-fb57c",
    storageBucket: "facebook-messenger-clone-fb57c.appspot.com",
    messagingSenderId: "425120192125",
    appId: "1:425120192125:web:fe343d2fabf6e605b50314",
    measurementId: "G-B7DH5XQ04K"
  });

  const db = firebaseApp.firestore();

  export default db ;


