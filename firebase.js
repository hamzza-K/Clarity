// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { initializeFirestore } from 'firebase/firestore';




// const firebaseConfig = {
//   apiKey: "AIzaSyArfg9HOi8YRqajk4pGgYcgNF-K8CG-XS0",
//   authDomain: "pocket-doctor-4f993.firebaseapp.com",
//   projectId: "pocket-doctor-4f993",
//   storageBucket: "pocket-doctor-4f993.appspot.com",
//   messagingSenderId: "850426302975",
//   appId: "1:850426302975:web:549072774669be6c2d17ca",
//   measurementId: "G-QTMHNZPFEF"
// };
  


const firebaseConfig = {
  apiKey: "AIzaSyBZfqEtkK09yLiB4cIoMk2NSMhiv-3D4nc",
  authDomain: "pockdock-2a5f8.firebaseapp.com",
  projectId: "pockdock-2a5f8",
  storageBucket: "pockdock-2a5f8.appspot.com",
  messagingSenderId: "976470157882",
  appId: "1:976470157882:web:b97755b751c61dca43a303"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const storage = getStorage(app);
const db = initializeFirestore(app, {
  experimentalAutoDetectLongPolling: true
});

const signIn =  (email, password) => {
  try{  
  signInWithEmailAndPassword(auth, email, password)
    .then((re) => {
      console.log(re)
    })
  }catch (error){
    console.log(error)
  }
}

function signUp(name, email, password){
  try{ 
    createUserWithEmailAndPassword(auth, name, email, password)
    .then((re) => {
      console.log(re)
    }) }catch (err) {
      console.log(err)
    }
}

export {app, auth, storage, db, signIn, signUp};