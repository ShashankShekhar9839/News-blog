// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDKHK6RceSBoPk7qbLskVAwPxPDG88aaqM",
  authDomain: "news-blog-4c3a6.firebaseapp.com",
  projectId: "news-blog-4c3a6",
  storageBucket: "news-blog-4c3a6.appspot.com",
  messagingSenderId: "300737146951",
  appId: "1:300737146951:web:6ccd670bc8aebdb9144162"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);