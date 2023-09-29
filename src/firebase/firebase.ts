// Import required services
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Importing Firebase Authentication service
import { getFirestore } from "firebase/firestore"; // Importing Firestore service

const firebaseConfig = {
  apiKey: "AIzaSyBE-rc_5WvECAAaG5QEnZtfatpztpPnjz0",
  authDomain: "portfolio-dbf50.firebaseapp.com",
  databaseURL: "https://portfolio-dbf50-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portfolio-dbf50",
  storageBucket: "portfolio-dbf50.appspot.com",
  messagingSenderId: "173776949572",
  appId: "1:173776949572:web:b88c9babb223bbe2bfc711",
  measurementId: "G-8MVPWD2FC6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Firebase Authentication
const db = getFirestore(app); // Initialize Firestore

// Exporting auth and db so that they can be used in other parts of your app
export { auth, db, analytics };
