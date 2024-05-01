// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRPfDS9MsDay6LrJjybZ8aSkczhSi0FTA",
  authDomain: "location-6f75d.firebaseapp.com",
  databaseURL: "https://location-6f75d-default-rtdb.firebaseio.com",
  projectId: "location-6f75d",
  storageBucket: "location-6f75d.appspot.com",
  messagingSenderId: "1028889285138",
  appId: "1:1028889285138:web:7c775e092b0533ee907ecb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };
