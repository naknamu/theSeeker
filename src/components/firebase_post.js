import { collection, doc, setDoc } from "firebase/firestore";
import db from "./firebase_init";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const PostFirestore = async (username, timeCompleted) => {
  try {
    const docRef = doc(collection(db, "users"));
    await setDoc(docRef, {
      name: username,
      time: timeCompleted,
      created: firebase.firestore.FieldValue.serverTimestamp(),
    });

    console.log("Document created with ID: ", docRef.id);
  } catch (e) {
    console.log("Error adding document: ", e);
  }
};

export { PostFirestore };
