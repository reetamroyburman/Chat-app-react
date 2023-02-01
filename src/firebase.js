import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBiYSeWm8rWlNoJwrfTPqFb2oiQVYu5gik",
  authDomain: "chat-ac75f.firebaseapp.com",
  projectId: "chat-ac75f",
  storageBucket: "chat-ac75f.appspot.com",
  messagingSenderId: "866539903758",
  appId: "1:866539903758:web:f7a5c2282240131000d55f"
};



export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()







