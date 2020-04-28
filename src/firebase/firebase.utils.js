import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAyovsy--fl39zDLqMGJkkdmP1-JxWGWGM",
    authDomain: "crwn-db-a8b31.firebaseapp.com",
    databaseURL: "https://crwn-db-a8b31.firebaseio.com",
    projectId: "crwn-db-a8b31",
    storageBucket: "crwn-db-a8b31.appspot.com",
    messagingSenderId: "684151546322",
    appId: "1:684151546322:web:3ea82d6b040d53e622e80b"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;