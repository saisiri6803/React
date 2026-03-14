
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "job-tracker-b8bc2.firebaseapp.com",
  projectId: "job-tracker-b8bc2",
  storageBucket: "job-tracker-b8bc2.firebasestorage.app",
  messagingSenderId: "533956292964",
  appId: "1:533956292964:web:37aa84ee8a0cb491f98a71"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);