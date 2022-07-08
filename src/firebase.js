import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    //  add  your api key don't use mine because it's just for demo
    
    
    apiKey: "AIzaSyAev79MapED2-3uKB7psPZfd_n9sUnWNdA",
  authDomain: "bankpage-demos.firebaseapp.com",
  projectId: "bankpage-demos",
  storageBucket: "bankpage-demos.appspot.com",
  messagingSenderId: "827055662271",
  appId: "1:827055662271:web:540d84fbdcc3cb8f31120a"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app)
