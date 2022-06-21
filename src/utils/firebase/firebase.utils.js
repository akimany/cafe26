// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

import { getAnalytics } from 'firebase/analytics';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCx3fDNkwZyrLkNwfhJxYvwdmiE4hrtHzk',
  authDomain: 'cafe26-1b95a.firebaseapp.com',
  projectId: 'cafe26-1b95a',
  storageBucket: 'cafe26-1b95a.appspot.com',
  messagingSenderId: '139789935216',
  appId: '1:139789935216:web:0c8d4abfa7c5a38cd90ab5',
  measurementId: 'G-QKWZYF02WM',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// analytics
const analytics = getAnalytics(app);

// Authentication
export const auth = getAuth();

// firestore
export const db = getFirestore(app);

export const makeUserDocumentFromAuth = async (
  userAuthObj,
  additionalInformation = {}
) => {
  if (!userAuthObj) return;

  const userDocRef = doc(db, 'users', userAuthObj.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuthObj;
    const madeAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        madeAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('makeUserDocumentFromAuth error', error.message);
    }
  }
  return userSnapshot;
};

export const makeAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);
