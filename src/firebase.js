import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDS8vkRfoZDzlvLXYjm5zF95bRpEkiojUk",
  authDomain: "margam-farms.firebaseapp.com",
  projectId: "margam-farms",
  storageBucket: "margam-farms.appspot.com",
  messagingSenderId: "85176944639",
  appId: "1:85176944639:web:fb15efaec3801c2e6a89ca",
  measurementId: "G-SZG9QKFNY3"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
