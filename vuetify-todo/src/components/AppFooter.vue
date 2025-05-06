<template>
  <v-footer class="text-center d-flex flex-column ga-2 py-4" app="true">
    <div class="d-flex ga-3">
      <v-btn
        v-for="link in links"
        :key="link.icon"
        :icon="link.icon"
        elevation="2"
        density="comfortable"
        variant="text"
        :href="link.href"
      ></v-btn>
    </div>

    <v-divider class="my-2" thickness="2" width="50"></v-divider>

    <v-divider></v-divider>

    <div>
      <strong> &copy; {{ new Date().getFullYear() }} | Brandon Knorr</strong>
    </div>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          icon: "mdi-linkedin",
          href: "https://www.linkedin.com/in/brandon-knorr93",
        },
        { icon: "mdi-github", href: "https://github.com/Brandon-Knorr" },
      ],
    };
  },
};
</script>

<style lang="sass">
@use '../styles/settings.scss'
</style>
