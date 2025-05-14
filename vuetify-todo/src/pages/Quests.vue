<script>
import Navbar from "@/components/Navbar.vue";
import Popup from "@/components/Popup.vue";
import TaskList from "@/components/TaskList.vue";
import TaskCollection from "@/models/TaskCollection";
import Task from "@/models/Task";
export default {
  components: { Navbar, Popup, TaskList },
  data() {
    return {
      quests: [], // Array to hold tasks
      userId: "mrzzVghjAbtNwAYdhPN6", // Replace with the actual user ID (e.g., from authentication)
    };
  },
  async created() {
    try {
      // Fetch tasks for the specific user from Firebase
      this.quests = await TaskCollection.getAll(this.userId);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  },
  methods: {
    async handleAddTask(taskData) {
      console.log("Task data received from Popup:", taskData); // Debug log

      try {
        const newTask = new Task(taskData); // Create a new Task instance
        console.log("New Task instance:", newTask); // Debug log

        // Save to Firestore
        const taskId = await TaskCollection.addTask(this.userId, newTask);
        console.log("Task saved to Firestore with ID:", taskId); // Debug log

        // Update local list
        newTask.id = taskId;
        this.quests.push(newTask);
        console.log("Task added to local quests array:", this.quests); // Debug log
      } catch (error) {
        console.error("Error adding task:", error);
      }
    },
    sortBy(prop) {
      this.quests.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
  },
};
</script>

<template>
  <div class="quests">
    <Navbar />
    <h1 class="text-h5 font-weight-light">Quests</h1>

    <v-row class="my-3">
      <v-col class="text-center">
        <Popup @add-task="handleAddTask" />
      </v-col>
    </v-row>

    <v-row class="mb-0">
      <v-col>
        <v-btn
          v-tooltip:top="'Sort quests by title'"
          color="#d0a8f0"
          size="small"
          variant="flat"
          prepend-icon="mdi-filter-variant"
          @click="sortBy('title')"
        >
          <v-text class="text-caption font-weight-light">by quest title</v-text>
        </v-btn>
        <v-btn
          v-tooltip:top="'Sort quests by status'"
          color="#d0a8f0"
          size="small"
          variant="flat"
          prepend-icon="mdi-timer-sand-complete"
          @click="sortBy('status')"
        >
          <v-text class="text-caption font-weight-light">by status</v-text>
        </v-btn>
        <v-btn
          v-tooltip:top="'Sort quests by due date'"
          color="#d0a8f0"
          size="small"
          variant="flat"
          prepend-icon="mdi-calendar-alert"
          @click="sortBy('due')"
        >
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
