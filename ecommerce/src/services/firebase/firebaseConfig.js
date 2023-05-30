import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyA4aauujO2IJtw_cKcxLotMPBSUpKEjcoM",
    authDomain: "life-3ce7c.firebaseapp.com",
    projectId: "life-3ce7c",
    storageBucket: "life-3ce7c.appspot.com",
    messagingSenderId: "605367282478",
    appId: "1:605367282478:web:43e26e4eeca7c02b4968bf"
  };
  
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)