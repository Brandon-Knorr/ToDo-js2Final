<script>
  import Navbar from '@/components/Navbar.vue';
  import Popup from '@/components/Popup.vue';
  import TaskList from '@/components/TaskList.vue';
  import TaskCollection from '@/models/TaskCollection';
  import Task from '@/models/Task';
  export default {
    components: { Navbar, Popup, TaskList },
    data () {
      return {
        tasks: [],
      };
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
          prepend-icon="mdi-filter-variant"
          size="small"
          variant="flat"
          @click="sortBy('title')"
        >
          <v-text class="text-caption font-weight-light">by quest title</v-text>
        </v-btn>
        <v-btn
          v-tooltip:top="'Sort quests by status'"
          color="#d0a8f0"
          prepend-icon="mdi-timer-sand-complete"
          size="small"
          variant="flat"
          @click="sortBy('status')"
        >
          <v-text class="text-caption font-weight-light">by status</v-text>
        </v-btn>
        <v-btn
          v-tooltip:top="'Sort quests by due date'"
          color="#d0a8f0"
          prepend-icon="mdi-calendar-alert"
          size="small"
          variant="flat"
          @click="sortBy('due')"
        >
          <v-text class="text-caption font-weight-light">by due date</v-text>
        </v-btn>
        <TaskList :tasks="tasks" />
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
