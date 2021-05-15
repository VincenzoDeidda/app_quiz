import firebase from 'firebase';

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyAwN9XdDhj0jNbTcwQj5hVOLlfACyItqzE",
    authDomain: "app-quiz-335ff.firebaseapp.com",
    projectId: "app-quiz-335ff",
    storageBucket: "app-quiz-335ff.appspot.com",
    messagingSenderId: "211445560287",
    appId: "1:211445560287:web:37b3ea765ca48c3e544a6a"
  });

  const db=firebaseApp.firestore();

  export default db;