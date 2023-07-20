import { collection, setDoc, addDoc, getDocs, query, where, doc, updateDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { storage } from "./firebaseConfig";
import {  getDownloadURL, ref, uploadBytes, uploadString } from "firebase/storage";

export const addUser = async (id, name) => {
    try {
        const docRef = await setDoc(doc(db, "users", `${id}`) ,{
            id,
            name,
            followers: [],
            following: [],
            bio: "",
            image:"https://firebasestorage.googleapis.com/v0/b/splitr-d3d02.appspot.com/o/default.jpg?alt=media&token=3bdf1b9f-3892-4095-bfb9-f27e1d477ff8",
        });
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
    await uploadBytes(imageRef, blob)
    url = await getDownloadURL(imageRef)
    return url
}

export const updateProfile = async (id, uri, bio) => {
    const docRef = doc(db, "users", `${id}`)
    await updateDoc(docRef, {
        image: uri,
        bio
    })
}

export const getUsersList = async (id) => {
    const col = collection(db, 'users')
    const q = query(col, where('id', '!=', `${id}`))
    const querysnapshot = await getDocs(q);
    let usersArray = [];
    querysnapshot.forEach((doc) => {
        usersArray.push(doc.data())
    })
    return usersArray
}