// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAg9bXwl_ZFJu2FuOSYzEnFJ6iSn7fA2EY",
  authDomain: "jphacks-4a068.firebaseapp.com",
  databaseURL:
    "https://jphacks-4a068-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "jphacks-4a068",
  storageBucket: "jphacks-4a068.appspot.com",
  messagingSenderId: "738330529868",
  appId: "1:738330529868:web:cb0bacabbd5e062769e4e9",
  measurementId: "G-BPDFN4B5DH",
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export default db;
