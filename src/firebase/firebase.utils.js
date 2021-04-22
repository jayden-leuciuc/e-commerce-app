import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCxnCaXJ1_Q3ty4rEagbPWEUJAnlpe1M9E',
  authDomain: 'e-commerce-store-424fd.firebaseapp.com',
  projectId: 'e-commerce-store-424fd',
  storageBucket: 'e-commerce-store-424fd.appspot.com',
  messagingSenderId: '202496898652',
  appId: '1:202496898652:web:ba5d014774b873b8d0d899',
  measurementId: 'G-GHJ1BZ4LHY',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
