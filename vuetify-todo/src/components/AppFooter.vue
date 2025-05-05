<template>
  <v-footer class="text-center d-flex flex-column ga-2 py-4" app="true">
    <div class="d-flex ga-3">
      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        density="comfortable"
        variant="text"
      ></v-btn>
    </div>

    <v-divider class="my-2" thickness="2" width="50"></v-divider>

    <v-divider></v-divider>

    <div>
      &copy; {{ new Date().getFullYear() }} | <strong>Brandon Knorr</strong>
    </div>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-linkedin", "mdi-github"],
  }),
};
</script>

<style lang="sass">
@use '../styles/settings.scss'
</style>
