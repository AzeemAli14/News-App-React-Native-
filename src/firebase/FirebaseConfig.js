import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCf_qyHrMGlLb_vQ5tdJ8gl1zrsmfAjYxs",
    authDomain: "rn-news-app-3aef1.firebaseapp.com",
    projectId: "rn-news-app-3aef1",
    storageBucket: "rn-news-app-3aef1.appspot.com",
    messagingSenderId: "84837286337",
    appId: "1:84837286337:web:8389e37fde68b51a312f40"
  }

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  export { firebase };