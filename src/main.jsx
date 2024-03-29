import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './firebase/config'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_lVTdsTbemy5TwUyc-R5HscbMp-XIFBo",
  authDomain: "reactproject-c6a9f.firebaseapp.com",
  projectId: "reactproject-c6a9f",
  storageBucket: "reactproject-c6a9f.appspot.com",
  messagingSenderId: "332126135397",
  appId: "1:332126135397:web:289c7f30096b835934928c",
  measurementId: "G-HLV71Q9C9S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
