// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeAuth,getReactNativePersistence} from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxEH4W_0uPeqZWA1ZRxgBZcLCp--7-EuQ",
  authDomain: "nazar-fa72c.firebaseapp.com",
  projectId: "nazar-fa72c",
  storageBucket: "nazar-fa72c.firebasestorage.app",
  messagingSenderId: "882739254504",
  appId: "1:882739254504:web:2c1bf74fccbd7d4a5ce55d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
})


export const firestore = getFirestore(app);