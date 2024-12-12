// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0AsdlD-46tRGSjkF_GopUDkS_wJQLwWI",
  authDomain: "e-haino.firebaseapp.com",
  projectId: "e-haino",
  storageBucket: "e-haino.firebasestorage.app",
  messagingSenderId: "355874538963",
  appId: "1:355874538963:web:1cce1dd868fe0e5f341b26",
  measurementId: "G-1BL5BV53QZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Export the required modules
export { app, analytics, auth };
