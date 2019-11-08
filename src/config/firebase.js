import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDLp0uXQ4HQqeHt2Ngf78NX8hSOBjYXvWI",
  authDomain: "edtube-dad00.firebaseapp.com",
  databaseURL: "https://edtube-dad00.firebaseio.com",
  projectId: "edtube-dad00",
  storageBucket: "edtube-dad00.appspot.com",
  messagingSenderId: "1091943773258",
  appId: "1:1091943773258:web:adcfb5befcb6d97b33a2b3"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);