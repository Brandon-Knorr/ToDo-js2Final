// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJaxm_Mvl2EwTwaPGGCsLq44XVbIbMH7U",
  authDomain: "todorpg-vuetify.firebaseapp.com",
  projectId: "todorpg-vuetify",
  storageBucket: "todorpg-vuetify.firebasestorage.app",
  messagingSenderId: "234145916312",
  appId: "1:234145916312:web:614e43f7a19f712fc277ed",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
