import { collection, setDoc, addDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { storage } from "./firebaseConfig";
import {  getDownloadURL, ref, uploadBytes, uploadString } from "firebase/storage";

export const addUser = async (id, firstName, lastName) => {
    try {
        const docRef = await addDoc(collection(db, "users"), {
            id,
            firstName,
            lastName
        })
    }
    catch (e) {
        console.log(e)
    }
}

export const getUserById = async (id) => {
    try {
        const col = collection(db, "users")
        const q = query(col, where("id", "==", id));
        const querysnapshot = await getDocs(q)
        let user;
        querysnapshot.forEach(doc => {
            user = doc.data()
        })
        return user
    }
    catch (e){
        console.log(e)
    }
}

export const addProfilePic = async (id, uri) => {
    const imageRef = ref(storage, `${id}.jpg`)
    const response = await fetch(uri);
    let url;
    const blob = await response.blob()
    return uploadBytes(imageRef, blob)
        .then(() => getDownloadURL(imageRef))
        .then(res => url = res)
        .catch(e => console.log(e))
}
