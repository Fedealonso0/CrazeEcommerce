import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyA7-EQlYJsLOGQLHrywJedeBuN5ct5bVjM",
    authDomain: "reactappfedecoder.firebaseapp.com",
    projectId: "reactappfedecoder",
    storageBucket: "reactappfedecoder.appspot.com",
    messagingSenderId: "769849912541",
    appId: "1:769849912541:web:a0bea05efba0311699ff34"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
  
