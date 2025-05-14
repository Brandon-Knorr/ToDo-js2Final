<script>
export default {
  name: 'TaskItem',
  props: {
    task: Object
  }
}
</script>

<template>
  <v-card v-ripple tile density="compact" color="#ecdcf9" hover ripple class="pa-3 pb-0">
    <v-row class="d-flex flex-wrap justify-space-around" :class="`pa-3 quest ${ task.status }`">
      <v-col class="d-flex flex-column" sm="12">
        <v-text class="text-caption">Quest:</v-text>
        <v-text>{{ task.title }}</v-text>
      </v-col>

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
          <v-chip size="small" :class="`${ task.status } my-2`">
            <v-text class="text-caption">{{ task.status }}</v-text>
          </v-chip>
        </div>
      </v-col>
    </v-row>
    <v-divider></v-divider>
  </v-card>
</template>


