import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlSQUaXgx4oARw4IkPDNPqYdYn2WcPPVU",
  authDomain: "facebook-clone-dd0af.firebaseapp.com",
  databaseURL: "https://facebook-clone-dd0af.firebaseio.com",
  projectId: "facebook-clone-dd0af",
  storageBucket: "facebook-clone-dd0af.appspot.com",
  messagingSenderId: "51580312930",
  appId: "1:51580312930:web:16da92955e5a962188603b",
  measurementId: "G-CXTEH7DGTE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
