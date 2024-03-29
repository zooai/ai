// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyDbERRAo2sjQQ7TYsjKNT_9goinx37i11U",
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "zooai-79eff.firebaseapp.com",
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "zooai-79eff",
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "zooai-79eff.appspot.com",
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBBY_SENDER_ID || "474320787",
    appId: process.env.NEXT_PUBLIC_FIBRARY_APP_ID || "1:474320787:web:c370d6937aaf8ce4766266",
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-5XC9XBQQ6T"
};
console.log(process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export default app