// funtions we need from firebase
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// my web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCP0eyo-4MvoIABgH-mkXP95YSX7dTI6qU",
  authDomain: "my-crwn-clothing-91e0e.firebaseapp.com",
  projectId: "my-crwn-clothing-91e0e",
  storageBucket: "my-crwn-clothing-91e0e.appspot.com",
  messagingSenderId: "114788160768",
  appId: "1:114788160768:web:4add112823a545ff174fe5",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
