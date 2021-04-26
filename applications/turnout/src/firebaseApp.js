import firebase from 'firebase';
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: process.env.VUE_APP_apiKey,
    authDomain: VUE_APP_authDomain,
    projectId: process.env.VUE_APP_projectId,
    storageBucket: process.env.VUE_APP_storageBucket,
    messagingSenderId: process.env.VUE_APP_messagingSenderId,
    appId: process.env.VUE_APP_appId,
    measurementId: process.env.VUE_APP_measurementId
  };
  // Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

export const eventsRef = firebaseApp.database().ref().child('events');
