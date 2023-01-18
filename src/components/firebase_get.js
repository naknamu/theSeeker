import db from './firebase_init';
import { collection, getDocs } from "firebase/firestore";

//get project data from CLOUD FIRESTORE even if the page is refreshed or closed
const pageRefreshed = window.onload = async function () {

    let userArray = [];

    //get data 
    const queryUserRecords = await getDocs(collection(db, "users"));

    queryUserRecords.forEach((doc) => {
        userArray.push(doc.data());
    })

    return userArray;

}

export {pageRefreshed};