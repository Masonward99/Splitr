import { collection, setDoc, addDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebaseConfig";

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
