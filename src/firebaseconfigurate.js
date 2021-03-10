import firebase from 'firebase'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyCfwfXRhn7PdnpPA63nilYhSb3bPl4u1nI",
    authDomain: "proyectoreact-b8d52.firebaseapp.com",
    projectId: "proyectoreact-b8d52",
    storageBucket: "proyectoreact-b8d52.appspot.com",
    messagingSenderId: "172378364528",
    appId: "1:172378364528:web:943feb87883cec028432b5",
    measurementId: "G-9789Y6H77T"
  };
  // Initialize Firebase
  const fire=firebase.initializeApp(firebaseConfig);
  const auth=fire.auth();
  export {auth}