import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfjkdep_wtvLXZN_F87vJ4O_tMsMk0PKs",
  authDomain: "winter-shield.firebaseapp.com",
  projectId: "winter-shield",
  storageBucket: "winter-shield.firebasestorage.app",
  messagingSenderId: "550454232398",
  appId: "1:550454232398:web:5255500f45a9145d9cca1f"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);