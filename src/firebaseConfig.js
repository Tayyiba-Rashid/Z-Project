import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBoXlV7ZVwHaELqXZjZz8Pa_kZKg3Tw1pA",
  authDomain: "fir-4c97d.firebaseapp.com",
  projectId: "fir-4c97d",
  storageBucket: "fir-4c97d.firebasestorage.app",
  messagingSenderId: "653764699466",
  appId: "1:653764699466:web:fd95a80afa520a99330db3",
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export
const auth = getAuth(app);
export default auth;

//  google auth provider
const googleProvider = new GoogleAuthProvider();
//  GOOGLE FUNCTION
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.log(error.message);
    throw new Error("Google Sign-in failed");
  }
};

const facebookProvider = new FacebookAuthProvider();
export const signInWithFacebook = async () => {
  try {
    const result = await signInWithPopup(auth, facebookProvider);
    return result.user;
  } catch (error) {
    console.log(error.message);
    throw new Error("Google Sign-in failed");
  }
};

