import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChTgLfLuND-rXDlEXZwlpG8PGtpy56oGI",
  authDomain: "chuckle-tasker.firebaseapp.com",
  projectId: "chuckle-tasker",
  storageBucket: "chuckle-tasker.appspot.com",
  messagingSenderId: "480370636541",
  appId: "1:480370636541:web:33ee5c51ca9100181a3094",
  measurementId: "G-JTC7H4JZJM"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Google sign-in function
const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider);
};

const analytics = getAnalytics(app);
export { auth, db, signInWithGoogle };
