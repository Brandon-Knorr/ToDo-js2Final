import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZPwgBXiVkBeVPlIGBoVyCsr_F27AFVjQ",
  authDomain: "vuetify-todo-d7ac1.firebaseapp.com",
  projectId: "vuetify-todo-d7ac1",
  storageBucket: "vuetify-todo-d7ac1.firebasestorage.app",
  messagingSenderId: "1076156828825",
  appId: "1:1076156828825:web:0867dab6d745b7d0de7c08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

export { db };
