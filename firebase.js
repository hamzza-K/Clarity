// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { initializeFirestore } from 'firebase/firestore';




const firebaseConfig = {
  apiKey: "AIzaSyArfg9HOi8YRqajk4pGgYcgNF-K8CG-XS0",
  authDomain: "pocket-doctor-4f993.firebaseapp.com",
  projectId: "pocket-doctor-4f993",
  storageBucket: "pocket-doctor-4f993.appspot.com",
  messagingSenderId: "850426302975",
  appId: "1:850426302975:web:549072774669be6c2d17ca",
  measurementId: "G-QTMHNZPFEF"
};

// Initialize Firebase


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const storage = getStorage(app);
const db = initializeFirestore(app, {
  experimentalAutoDetectLongPolling: true
});

const signIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
    console.log("firebase auth succ", email, password)
  } catch (error){
    console.log(error)
  }
}

function signUp(name, email, password){
  return createUserWithEmailAndPassword(auth, name, email, password)
}

export {app, auth, storage, db, signIn, signUp};