<script>
  import { taskCollection } from '@/firebase/firebase.js';
  import { deleteDoc, doc } from 'firebase/firestore';
  export default {
    name: 'TaskItem',
    props: {
      task: { type: Object, required: true },
    },
    data () {
      return {
        tasks: [],
      }
    },
    methods: {
      deleteQuest () {
        const docRef = doc(taskCollection, this.task.id);
        deleteDoc(docRef)
          .catch(error => {
            console.log('Error removing document: ', error);
          });
      },
    },
  }
</script>

<template>
  <v-card
    v-ripple
    class="pa-3 pb-0"
    color="#ecdcf9"
    density="compact"
    hover
    ripple
    tile
  >
    <v-row class="d-flex flex-wrap justify-space-between" :class="`pa-3 quest ${ task.status }`">
      <v-col class="d-flex flex-column" sm="6">
        <v-text class="text-caption">Quest:</v-text>
        <v-text>{{ task.title }}</v-text>
      </v-col>

      <v-col sm="6">
        <v-btn @click="deleteQuest">delete</v-btn>
      </v-col>
    </v-row>

    <v-row class="d-flex flex-wrap justify-space-around" :class="`pa-3 quest ${ task.status }`">

      <v-col class="d-flex flex-column">
        <v-text class="text-start text-caption">Due By:</v-text>
        <v-text class="text-start">{{ task.due }}</v-text>
      </v-col>

      <v-col class="d-flex flex-column">
        <v-text class="text-center text-caption">Difficulty:</v-text>
        <v-text class="text-center">{{ task.difficulty }}</v-text>
      </v-col>

      <v-col class="d-flex flex-column">
        <div class="text-end">
          <v-chip :class="`${ task.status } my-2`" size="small">
            <v-text class="text-caption">{{ task.status }}</v-text>
          </v-chip>
        </div>
      </v-col>
    </v-row>
    <v-divider />
  </v-card>
</template>
