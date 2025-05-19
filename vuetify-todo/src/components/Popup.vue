<script>
  import { taskCollection } from '@/firebase/firebase.js';
  import { addDoc, doc } from 'firebase/firestore';

  export default {
    name: 'Popup',
    data () {
      return {
        id: '',
        title: '',
        status: '', // No longer set manually
        difficulty: '',
        due: '',
        Task: { type: Object, default: () => ({}) },
        inputRules: [v => v.length >= 3 || 'Must have at least 3 characters'],
      };
    },
    methods: {
      submit () {
        if (this.$refs.questForm.validate()) {
          const currentDate = new Date();
          const dueDate = new Date(this.due);

          let taskStatus = '';
          if (currentDate < dueDate) {
            taskStatus = 'Ongoing';
          } else if (currentDate > dueDate) {
            taskStatus = 'Overdue';
          } else {
            taskStatus = 'Complete';
          }

          const newTaskData = {
            title: this.title,
            difficulty: this.difficulty,
            status: taskStatus,
            due: this.due,
          }

          try {
            addDoc(taskCollection, newTaskData);
            console.log('Document successfully written!', this.id);
          } catch (error) {
            console.error('Error adding document: ', error);
          }

          this.clearForm();
          this.closeModal();
        }
      },
      clearForm () {
        this.title = '';
        this.difficulty = '';
        this.due = '';
      },
      closeModal () {
        this.isActive.value = false;
      },
    },
  };
</script>

<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <v-dialog max-width="400">
          <template #activator="{ props: activatorProps }">
            <v-btn v-bind="activatorProps" prepend-icon="mdi-sword-cross">
              Add New Quest
            </v-btn>
          </template>

          <template #default="{ isActive }">
            <v-card title="Embark on a new Quest">
              <v-card-text>
                <v-form ref="questForm" class="px-3">
                  <v-text-field
                    v-model="title"
                    label="Title"
                    :rules="inputRules"
                    variant="outlined"
                  />
                  <v-select
                    v-model="difficulty"
                    :items="['Easy', 'Medium', 'Hard']"
                    label="Difficulty"
                    :rules="inputRules"
                    variant="outlined"
                  />
                  <v-date-input
                    v-model="due"
                    clearable
                    label="Due Date"
                    variant="outlined"
                  />

                  <v-btn
                    class="success mt-3"
                    flat
                    @click="submit"
                  >Add Quest</v-btn>
                </v-form>
              </v-card-text>

              <template #actions>
                <v-btn
                  class="ml-auto"
                  text="Close"
                  @click="isActive.value = false"
                />
              </template>
            </v-card>
          </template>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>
