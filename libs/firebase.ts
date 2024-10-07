// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpAfDzmGLURNWC1OpXf6Fu6cINXpds48o",
  authDomain: "engineerstore-36eea.firebaseapp.com",
  projectId: "engineerstore-36eea",
  storageBucket: "engineerstore-36eea.appspot.com",
  messagingSenderId: "464093413358",
  appId: "1:464093413358:web:c5deaf8c679c2856f218ff"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;