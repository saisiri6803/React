// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB38JAmoFoQ7-1n5PXcbmn7um9raTo7tzs",
  authDomain: "job-tracker-b8bc2.firebaseapp.com",
  projectId: "job-tracker-b8bc2",
  storageBucket: "job-tracker-b8bc2.firebasestorage.app",
  messagingSenderId: "533956292964",
  appId: "1:533956292964:web:37aa84ee8a0cb491f98a71"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);