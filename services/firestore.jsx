import { db } from "./firebase.jsx";
import { collection, getDocs, doc, setDoc } from 'firebase/firestore';

export async function commitDeckToFirestore(userId, dataPackage) {
    const userPath = doc(db, "users", userId, "decks", dataPackage["name"]);
    await setDoc(userPath, dataPackage);
}

export async function fetchDecksFromFirestore(userId) {
    const decks = [];
    const userDecksRef = collection(db, "users", userId, "decks");
    const querySnapshot = await getDocs(userDecksRef);

    querySnapshot.forEach((doc) => {
        decks.push({ id: doc.id, ...doc.data() });
    });

    return decks;
}
