import { collection, setDoc, addDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const addUser = async (id, firstName, lastName) => {
    console.log(id)
    console.log(firstName)
    console.log(lastName)
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
