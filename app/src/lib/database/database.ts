// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { env } from "@/env.mjs";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: env.DATABASE_API_KEY,
  authDomain: env.DATABASE_AUTH_DOMAIN,
  databaseURL: env.DATABASE_URL,
  projectId: env.DATABASE_PROJECT_ID,
  storageBucket: env.DATABASE_STORAGE_BUCKET,
  messagingSenderId: env.DATABASE_MESSEGING_SENDER_ID,
  appId: env.DATABASE_APP_ID,
  measurementId: env.DATABASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export default db;
