<script>
import Navbar from '../components/Navbar.vue';
import { db } from '../firebase/firebase.js';
import { collection, addDoc } from 'firebase/firestore';
import User from "@/models/User.js";
export default {
  name: 'UserList',
  data() {
    return {
      user: new User(),
    };
  },
  methods: {
    async createUser() {
      const users = collection(db, 'users');
      const newUser =  function creatNewUser() {
        return {
          firstName: 'Bobby',
          lastName: 'Mack',
        }
      };

      const docRef = await addDoc(users, newUser());

      console.log('Document written with ID: ', docRef.id);
    },
  },
  // created() {
  //   this.createUser()
  // },
};
</script>


<template>
  <div class="profile">
    <Navbar></Navbar>
    <h1 class="text-h5 font-weight-light">Profile</h1>

    <v-container class="my-5"> content </v-container>
  </div>
</template>

