// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBBY_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIBRARY_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};
console.log(process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID);

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getFirestore(app);
export const docRef = collection(db, 'Chats')
export const auth = getAuth();
export const authState = onAuthStateChanged;
const storage = getStorage(app, "gs://zoo-labs.appspot.com");
export const videoRef = ref(storage, '/bg_video');
export const reference = ref;
export const DownloadURL = getDownloadURL;
export default app