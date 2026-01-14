// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-sgHAtAAZ8EJ1vj0mx6-rMBbiFo_HL68",
  authDomain: "coffee-central-uk.firebaseapp.com",
  projectId: "coffee-central-uk",
  storageBucket: "coffee-central-uk.firebasestorage.app",
  messagingSenderId: "581087841721",
  appId: "1:581087841721:web:13fa53d218a9a3c440ba68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);