// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAp7OnZG51O5fGc6MzKydp8Eb1smxoDqh4",
    authDomain: "sneakup-28d6e.firebaseapp.com",
    projectId: "sneakup-28d6e",
    storageBucket: "sneakup-28d6e.appspot.com",
    messagingSenderId: "318910355521",
    appId: "1:318910355521:web:cb63681b7e270fc51b8ec0",
    measurementId: "G-GGKJ8JNZ2F"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export {db,auth};