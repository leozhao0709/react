import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDRHGnAW0XbIDxRGZX3D49AgCQdhJySlJE',
  authDomain: 'e-commerce-react-22ecc.firebaseapp.com',
  databaseURL: 'https://e-commerce-react-22ecc.firebaseio.com',
  projectId: 'e-commerce-react-22ecc',
  storageBucket: 'e-commerce-react-22ecc.appspot.com',
  messagingSenderId: '461894838197',
  appId: '1:461894838197:web:a88806dabc2483f1efdbfc'
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (user: firebase.User | null, additionalInfo?: any) => {
  if (!user) {
    throw Error('User is invalid error!');
  }

  const userRef = firestore.doc(`users/${user.uid}`);
  const userSnapshot = await userRef.get();

  if (!userSnapshot.exists) {
    const { displayName, email } = user;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalInfo
      });
    } catch (error) {
      throw error;
    }
  }

  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
