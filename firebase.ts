import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANPmEvvfGuZYJjg9ugfMneUfRbjk-SHlw",
  authDomain: "rsvp-wedding-3e6b9.firebaseapp.com",
  projectId: "rsvp-wedding-3e6b9",
  storageBucket: "rsvp-wedding-3e6b9.firebasestorage.app",
  messagingSenderId: "815678010936",
  appId: "1:815678010936:web:7347c834f705e73efb18cd",
  measurementId: "G-ZSC0H7FT0N",
};

const app = initializeApp(firebaseConfig);

// Firestore instance
export const db = getFirestore(app);
