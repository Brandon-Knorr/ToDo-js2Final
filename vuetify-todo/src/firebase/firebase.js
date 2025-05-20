import { initializeApp } from 'firebase/app';
import { collection, getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import Task from '@/models/Task';
import User from '@/models/User';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBZPwgBXiVkBeVPlIGBoVyCsr_F27AFVjQ',
  authDomain: 'vuetify-todo-d7ac1.firebaseapp.com',
  projectId: 'vuetify-todo-d7ac1',
  storageBucket: 'vuetify-todo-d7ac1.firebasestorage.app',
  messagingSenderId: '1076156828825',
  appId: '1:1076156828825:web:0867dab6d745b7d0de7c08',
};

// Initialize Firebase
let app, db, auth, authProvider;
try {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  auth = getAuth(app);
  authProvider = new GoogleAuthProvider();
}catch(error){
  // do as set timeout because Quasar's Notify is not registered yet.
  console.log(error);
}
const taskCollection = collection(db, 'Tasks');

export { db, app, taskCollection, auth, authProvider };
