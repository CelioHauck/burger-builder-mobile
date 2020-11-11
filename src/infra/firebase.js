import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCL-RAE9P8F2bwysYHGMDtlWXSpByI4ekE",
  authDomain: "my-burger-builder-c52f0.firebaseapp.com",
  databaseURL: "https://my-burger-builder-c52f0.firebaseio.com",
  projectId: "my-burger-builder-c52f0",
  storageBucket: "my-burger-builder-c52f0.appspot.com",
  messagingSenderId: "664214231574",
  appId: "1:664214231574:web:0761e4e595a286aaa6b337",
  measurementId: "G-792NXBQTC1",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
