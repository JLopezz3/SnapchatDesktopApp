import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDWq8LCsviXAj4Ne3lsJBGUAZfC2_zyKOg",
  authDomain: "snapchat-clone-58634.firebaseapp.com",
  projectId: "snapchat-clone-58634",
  storageBucket: "snapchat-clone-58634.appspot.com",
  messagingSenderId: "771142691744",
  appId: "1:771142691744:web:58b7b53860c1b5f01fd2c5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
