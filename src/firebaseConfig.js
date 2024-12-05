import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, setPersistence, browserLocalPersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjrUhBCh9JSQpAB2rGXIOE0NQ0cYTJP6U",
  authDomain: "chat-app-777b6.firebaseapp.com",
  projectId: "chat-app-777b6",
  storageBucket: "chat-app-777b6.firebasestorage.app",
  messagingSenderId: "1038030915521",
  appId: "1:1038030915521:web:a2ff441131f190abd55140",
  measurementId: "G-NMVRTGZGQ2",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);

setPersistence(auth, browserLocalPersistence)
  .then(() => {
    // Now the session will persist across page refreshes
  })
  .catch((error) => {
    console.error("Error setting persistence", error);
  }); 

// Google Auth Provider
const googleProvider = new GoogleAuthProvider();

// Export auth separately
export { auth, db, googleProvider  };
