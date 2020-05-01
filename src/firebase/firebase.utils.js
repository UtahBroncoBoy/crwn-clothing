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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
        return;
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('Document not created due to error ', error)
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;