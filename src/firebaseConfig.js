import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA8_...",
  authDomain: "zimo-47e01.firebaseapp.com",
  projectId: "zimo-47e01",
  storageBucket: "zimo-47e01.firebasestorage.app",
  messagingSenderId: "549959379820",
  appId: "1:549959379820:web:994773eb87ff2acc616149",
  measurementId: "G-S4Y0JWY9YM"
};

const app = initializeApp(firebaseConfig);
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;

export { app, analytics };
