<script>
  import { collection, onSnapshot } from 'firebase/firestore';
  import { db } from '@/firebase/firebase.js';
  import Task from '@/models/Task.js';
  export default {
    data () {
      return {
        tasks: [],
      }
    },
    computed: {
    },
    mounted () {
      this.loadTasks();
    },
    methods: {
      loadTasks () {
        const taskCollection = collection(db, 'Tasks');
        onSnapshot(taskCollection,
                   querySnapshot => {
                     this.tasks = [];
                     querySnapshot.forEach(doc => {
                       if (doc.data().status !== 'Complete')
                         this.tasks.push(new Task(doc.id, doc.data()))
                     });
                   });
      },
    },
  };
</script>


<template>
  <h1 class="text-h5 font-weight-light">Home</h1>

  <v-container class="my-5">
    <v-expansion-panels flat hover>
      <v-expansion-panel v-for="task in tasks" :key="task.id" color="#ecdcf9">
        <v-expansion-panel-title disable-icon-rotate>
          {{ task.title }}
          <template #actions>
            <v-icon v-if="task.status == 'Overdue'" color="#f64740" icon="mdi-clock-alert" />
            <v-icon v-if="task.status == 'Ongoing'" color="#f4b067" icon="mdi-shield-alert" />
          </template>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <div>due date:</div>
          {{ task.due }}
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>
