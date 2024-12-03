import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
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

const auth = getAuth(app);
export default auth;

//  google auth provider
const googleProvider = new GoogleAuthProvider();
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

const githubProvider = new GithubAuthProvider();
export const signInWithGithub = async () => {
  try {
    const result = await signInWithPopup(auth, githubProvider);
    return result.user;
  } catch (error) {
    console.log(error.message);
    throw new Error("Github Sign-in failed");
  }
}

