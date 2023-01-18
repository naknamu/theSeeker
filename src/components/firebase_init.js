// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADuoNJ0pnYGeF-tmqnW01YDS3hV0bo2dk",
  authDomain: "whereswaldo-81ed8.firebaseapp.com",
  projectId: "whereswaldo-81ed8",
  storageBucket: "whereswaldo-81ed8.appspot.com",
  messagingSenderId: "750524906671",
  appId: "1:750524906671:web:a9b9c6f1791e2b436ae85a",
  measurementId: "G-BJVZ55HZBL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;
