// funtions we need from firebase
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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

// Inintializing google provider instance
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// install Firestore database ---> use it to access our database or when we get a document data or set a document data
export const db = getFirestore();

// userAuth ---> the object that we got back from Firebase authentication
export const createUserDocumentFromAuth = async (userAuth) => {
  // Document reference take 3 imputs (database, users object, unique ID)
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  // If user data not exist set the document with the data from userAuth in my collection
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};
