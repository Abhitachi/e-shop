import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestor, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAgdkw9gYxGdssvggtcCPyWbZGsF-eu-WY",
  authDomain: "eshop-31c36.firebaseapp.com",
  projectId: "eshop-31c36",
  storageBucket: "eshop-31c36.appspot.com",
  messagingSenderId: "510900880128",
  appId: "1:510900880128:web:95ae28d6ab1029a39ce9e5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
