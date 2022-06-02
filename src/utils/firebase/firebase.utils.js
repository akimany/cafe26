// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

import { getAnalytics } from 'firebase/analytics';
import { async } from '@firebase/util';

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

// firestore
export const db = getFirestore(app);

export const makeUserDocumentFromAuth = async (
  userAuthObj,
  additionalInformation = {}
) => {
  if (!userAuthObj) return;

  const userDocRef = doc(db, 'users', userAuthObj.id);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuthObj;
    const madeAt = new Date();

    try {
      await setDoc({
        displayName,
        email,
        madeAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error', error.message);
    }
  }
  return userSnapshot;
};
