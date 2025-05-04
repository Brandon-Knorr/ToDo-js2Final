import firebase from "firebase";
import { initializeApp } from "firebase/app";
import "firebase/firestore";

// web apps firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDJaxm_Mvl2EwTwaPGGCsLq44XVbIbMH7U",
  authDomain: "todorpg-vuetify.firebaseapp.com",
  projectId: "todorpg-vuetify",
  storageBucket: "todorpg-vuetify.firebasestorage.app",
  messagingSenderId: "234145916312",
  appId: "1:234145916312:web:614e43f7a19f712fc277ed",
};

//initialize Firebase
export const app = firebase.initializeApp(firebaseConfig).firestore();
