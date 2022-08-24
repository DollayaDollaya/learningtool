// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDegtx-feFD37FXat-DarKkghemWbo0Mp8",
  authDomain: "best-learning-tool-77c76.firebaseapp.com",
  databaseURL: "https://best-learning-tool-77c76-default-rtdb.firebaseio.com",
  projectId: "best-learning-tool-77c76",
  storageBucket: "best-learning-tool-77c76.appspot.com",
  messagingSenderId: "741549582631",
  appId: "1:741549582631:web:225a2019fcb9115915a102",
  measurementId: "G-415TYJ7SKP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
