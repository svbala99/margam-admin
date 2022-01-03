import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDS8vkRfoZDzlvLXYjm5zF95bRpEkiojUk",
  authDomain: "margam-farms.firebaseapp.com",
  projectId: "margam-farms",
  storageBucket: "margam-farms.appspot.com",
  messagingSenderId: "85176944639",
  appId: "1:85176944639:web:fb15efaec3801c2e6a89ca",
  measurementId: "G-SZG9QKFNY3"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}