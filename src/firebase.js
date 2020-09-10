import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyByZosXGt5276yYd_5-yz31HGztC31UH5Y",
  authDomain: "challenge-4d263.firebaseapp.com",
  databaseURL: "https://challenge-4d263.firebaseio.com",
  projectId: "challenge-4d263",
  storageBucket: "challenge-4d263.appspot.com",
  messagingSenderId: "285298135362",
  appId: "1:285298135362:web:8871f667861aa3692738db",
  measurementId: "G-3MW1E9JDS4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
