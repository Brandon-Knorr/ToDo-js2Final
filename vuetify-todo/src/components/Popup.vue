<script>
export default {
  name: 'Popup',
  data() {
    return {
      title: '',
      status: '',  // No longer set manually
      difficulty: '',
      due: '',
      inputRules: [
        v => v.length >= 3 || 'Must have at least 3 characters'
      ]
    };
  },
  methods: {
    submit() {
      if (this.$refs.questForm.validate()) {
        // Automatically determine status based on current date and due date
        const currentDate = new Date();
        const dueDate = new Date(this.due);

        let taskStatus = '';
        if (currentDate < dueDate) {
          taskStatus = 'Ongoing';
        } else if (currentDate > dueDate) {
          taskStatus = 'Overdue';
        } else {
          taskStatus = 'Complete';  // You could also keep this as a fallback if done.
        }

        const newTask = {
          title: this.title,
          status: taskStatus,  // Set dynamically
          difficulty: this.difficulty,
          due: this.due,
          done: false,
          subtasks: []
        };

        this.$emit('add-task', newTask);  // Emit task to parent
        this.clearForm();
      }
    },
    clearForm() {
      this.title = '';
      this.status = '';  // No need to reset status
      this.difficulty = '';
      this.due = '';
    }
  }
};
</script>

<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <v-dialog max-width="400">
          <template v-slot:activator="{ props: activatorProps }">
            <v-btn v-bind="activatorProps" prepend-icon="mdi-sword-cross">
              Add New Quest
            </v-btn>
          </template>

          <template v-slot:default="{ isActive }">
            <v-card title="Embark on a new Quest">
              <v-card-text>
                <v-form ref="questForm" class="px-3">
                  <v-text-field
                    label="Title"
                    variant="outlined"
                    v-model="title"
                    :rules="inputRules"
                  />
                  <v-select
                    label="Difficulty"
                    variant="outlined"
                    v-model="difficulty"
                    :items="['Easy', 'Medium', 'Hard']"
                    :rules="inputRules"
                  />
                  <v-date-input
                    clearable
                    label="Due Date"
                    variant="outlined"
                    v-model="due"
                  />

                  <v-btn class="success mt-3" flat @click="submit">Add Quest</v-btn>
                </v-form>
              </v-card-text>

              <template v-slot:actions>
                <v-btn class="ml-auto" text="Close" @click="isActive.value = false"></v-btn>
              </template>
            </v-card>
          </template>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>
