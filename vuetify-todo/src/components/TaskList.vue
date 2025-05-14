<script>
import TaskItem from './TaskItem.vue';

export default {
  name: 'TaskList',
  components: { TaskItem },
  props: {
    tasks: Array
  }
}
</script>

<template>
  <v-container class="my-5">
    <task-item v-for="task in tasks" :key="task.id || task.title" :task="task" />
  </v-container>
</template>


