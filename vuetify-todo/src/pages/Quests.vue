<script>
import Navbar from "@/components/Navbar.vue";
import Popup from "@/components/Popup.vue";
import TaskList from "@/components/TaskList.vue";
import Task from "@/models/Task";
import TaskCollection from "@/models/TaskCollection";

export default {
  components: { Navbar, Popup, TaskList },
  data() {
    return {
      quests: []
    };
  },
  async created() {
    this.quests = await TaskCollection.getAll();
  },
  methods: {
    async handleAddTask(taskData) {
      // Convert emitted raw task object to Task instance
      const newTask = new Task(taskData);

      // Save to Firestore
      const taskId = await TaskCollection.addTask(newTask);

      // Update local list
      newTask.id = taskId;
      this.quests.push(newTask);
    },
    sortBy(prop) {
      this.quests.sort((a, b) => a[prop] < b[prop] ? -1 : 1);
    }
  }
};
</script>

<template>
  <div class="quests">
    <Navbar />
    <h1 class="text-h5 font-weight-light">Quests</h1>

    <v-row class="my-3">
      <v-col class="text-center">
        <Popup />
      </v-col>
    </v-row>

    <v-row class="mb-0">
      <v-col>
        <v-btn v-tooltip:top="'Sort quests by title'" color="#d0a8f0" size="small" variant="flat"
               prepend-icon="mdi-filter-variant" @click="sortBy('title')">
          <v-text class="text-caption font-weight-light">by quest title</v-text>
        </v-btn>
        <v-btn v-tooltip:top="'Sort quests by status'" color="#d0a8f0" size="small" variant="flat"
               prepend-icon="mdi-timer-sand-complete" @click="sortBy('status')">
          <v-text class="text-caption font-weight-light">by status</v-text>
        </v-btn>
        <v-btn v-tooltip:top="'Sort quests by due date'" color="#d0a8f0" size="small" variant="flat"
               prepend-icon="mdi-calendar-alert" @click="sortBy('due')">
          <v-text class="text-caption font-weight-light">by due date</v-text>
        </v-btn>
        <TaskList :tasks="quests" />
      </v-col>

    </v-row>


  </div>
</template>

<style>
.quest.Complete {
  border-left: 4px solid #62a2e2;
}

.quest.Ongoing {
  border-left: 4px solid #f4b067;
}

.quest.Overdue {
  border-left: 4px solid #f64740;
}

.v-chip.Complete {
  background: #62a2e2;
  color: white;
  font-weight: 600;
}

.v-chip.Ongoing {
  background: #f4b067;
  color: white;
  font-weight: 600;
}

.v-chip.Overdue {
  background: #f64740;
  color: white;
  font-weight: 600;
}
</style>
