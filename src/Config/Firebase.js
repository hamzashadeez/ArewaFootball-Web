import firebase from 'firebase'

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCBHe2cRaMDf_8FWXOskj04CTFvP1DQqnU",
    authDomain: "footballhausa-4f8ce.firebaseapp.com",
    projectId: "footballhausa-4f8ce",
    storageBucket: "footballhausa-4f8ce.appspot.com",
    messagingSenderId: "1083734845847",
    appId: "1:1083734845847:web:0bf050c55710e9a34efcd2",
    measurementId: "G-5D26J2B3Y0"
  });

  firebase.analytics();

  const storage = firebaseApp.storage();
  const auth = firebaseApp.auth();
  const db = firebaseApp.firestore();
  var provider = new firebase.auth.GoogleAuthProvider();

  export {db, storage, auth, provider}; 