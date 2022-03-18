import firebase from 'firebase';

const firebaseApp=firebase.initializeApp({
  apiKey: "AIzaSyAgMu2MQUAPHjuaS9zM8LG26e4e97PxKRo",
  authDomain: "appquiz23-27601.firebaseapp.com",
  databaseURL: "https://appquiz23-27601-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "appquiz23-27601",
  storageBucket: "appquiz23-27601.appspot.com",
  messagingSenderId: "355198967017",
  appId: "1:355198967017:web:eede1a41103c7e59746478",
  measurementId: "G-5JEYYH1DR5"
});

  const db=firebaseApp.firestore();

  export default db;