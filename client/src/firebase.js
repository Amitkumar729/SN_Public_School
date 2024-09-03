// Import the necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject, listAll } from "firebase/storage";
import { getFirestore, collection, getDocs, addDoc, doc, query, where, deleteDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmJg5e1HFBdq59TaDxi9xTeekgn1xOEy8",
  authDomain: "sn-public-school-db.firebaseapp.com",
  projectId: "sn-public-school-db",
  storageBucket: "sn-public-school-db.appspot.com",
  messagingSenderId: "688186850444",
  appId: "1:688186850444:web:d2d54b6a70473ee7484fa9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const firestore = getFirestore(app);

export { storage, firestore, ref, uploadBytes, getDownloadURL, deleteObject, collection, getDocs, doc, addDoc, query, where, deleteDoc, listAll };
