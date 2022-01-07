import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCNmJiS_A1Zyou2JnOHZgLIWcnB8RQoOEA",
  authDomain: "space-a6018.firebaseapp.com",
  databaseURL: "https://space-a6018-default-rtdb.firebaseio.com",
  projectId: "space-a6018",
  storageBucket: "space-a6018.appspot.com",
  messagingSenderId: "842268596492",
  appId: "1:842268596492:web:3ad8d2c8d4fa2a8ccb1129"
};
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export default firebase;