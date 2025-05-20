<script>
  import TaskItem from './TaskItem.vue';
  import { collection, onSnapshot } from 'firebase/firestore';
  import Task from '@/models/Task.js';
  import { db } from '../firebase/firebase.js';

  export default {
    name: 'TaskList',
    components: { TaskItem },
    data () {
      return {
        tasks: [],
      }
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
  }
</script>

<template>
  <v-container class="my-5">
    <task-item v-for="task in tasks" :key="task.id" :task="task" />
  </v-container>
</template>
