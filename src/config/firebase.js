import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCkJCiAe9qaNRCif9I9nxn3BRBl91pklak",
  authDomain: "evted-63685.firebaseapp.com",
  databaseURL: "https://evted-63685.firebaseio.com",
  projectId: "evted-63685",
  storageBucket: "evted-63685.appspot.com",
  messagingSenderId: "137016398778",
  appId: "1:137016398778:web:734a63551e5cba9f928383"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);