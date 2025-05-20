<script>
  import { db } from '../firebase/firebase.js';
  import { addDoc, collection, onSnapshot } from 'firebase/firestore';
  import User from '@/models/User.js';
  import Task from '@/models/Task.js';
  export default {
    name: 'UserList',
    data () {
      return {
        user: new User(),
        tasks: [],
      };
    },
    mounted () {
      this.loadTasks();
    },
    methods: {
      async createUser () {
        const users = collection(db, 'users');
        const newUser = function creatNewUser () {
          return {
            firstName: 'Bobby',
            lastName: 'Mack',
          }
        };

        const docRef = await addDoc(users, newUser());

        console.log('Document written with ID: ', docRef.id);
      },
      loadTasks () {
        const taskCollection = collection(db, 'Tasks');
        onSnapshot(taskCollection,
                   querySnapshot => {
                     this.tasks = [];
                     querySnapshot.forEach(doc => {
                       if (doc.data().status == 'Complete')
                         this.tasks.push(new Task(doc.id, doc.data()))
                     });
                   });
      },
    },
    // created() {
  //   this.createUser()
  // },
  };
</script>


<template>
  <h1 class="text-h5 font-weight-light">Profile</h1>
  <v-container class="my-5">
    <v-expansion-panels flat hover>
      <v-expansion-panel v-for="task in tasks" :key="task.id" color="#ecdcf9">
        <v-expansion-panel-title disable-icon-rotate>
          {{ task.title }}
          <template #actions>
            <v-icon v-if="task.status == 'Complete'" color="#62a2e2" icon="mdi-check-all" />
          </template>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <div>staus:</div>
          {{ task.status }}
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>
