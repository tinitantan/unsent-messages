// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuM7DZW-AN9n5Sj4otmqEWQcdbdPPp9nA",
  authDomain: "unsent-messages.firebaseapp.com",
  projectId: "unsent-messages",
  storageBucket: "unsent-messages.firebasestorage.app",
  messagingSenderId: "205680178730",
  appId: "1:205680178730:web:cdea51042f44ba29273553",
  measurementId: "G-DY2BRB8MFW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };