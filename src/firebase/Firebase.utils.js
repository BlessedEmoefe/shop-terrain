import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCn6qgofTMYK7CnniOW5j_fB0iCN1CESWA",
  authDomain: "shop-terrain.firebaseapp.com",
  databaseURL: "https://shop-terrain.firebaseio.com",
  projectId: "shop-terrain",
  storageBucket: "shop-terrain.appspot.com",
  messagingSenderId: "651414028330",
  appId: "1:651414028330:web:d28e4089466c94f6bc8353",
  measurementId: "G-034X6GF17W"
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const Provider = new firebase.auth.GoogleAuthProvider();
Provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => {
  auth.signInWithPopup(Provider);
};

// const Provider2 = new firebase.auth.GithubAuthProvider();
// Provider2.setCustomParameters({ prompt: "select_account" });
// export const signInWithGithub = () => auth.signInWithPopup(Provider2);
// export default firebase;
