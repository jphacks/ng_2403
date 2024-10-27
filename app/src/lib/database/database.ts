// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { env } from "@/env.mjs";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: env.NEXT_PUBLIC_DATABASE_API_KEY,
  authDomain: env.NEXT_PUBLIC_DATABASE_AUTH_DOMAIN,
  databaseURL: env.NEXT_PUBLIC_DATABASE_URL,
  projectId: env.NEXT_PUBLIC_DATABASE_PROJECT_ID,
  storageBucket: env.NEXT_PUBLIC_DATABASE_STORAGE_BUCKET,
  messagingSenderId: env.NEXT_PUBLIC_DATABASE_MESSEGING_SENDER_ID,
  appId: env.NEXT_PUBLIC_DATABASE_APP_ID,
  measurementId: env.NEXT_PUBLIC_DATABASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export default db;
