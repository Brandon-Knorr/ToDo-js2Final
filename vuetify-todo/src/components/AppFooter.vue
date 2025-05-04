<template></template>

<script setup>
const items = [
  {
    title: "Vuetify Documentation",
    icon: `$vuetify`,
    href: "https://vuetifyjs.com/",
  },
];
</script>

<style scoped lang="sass">
.social-link :deep(.v-icon)
  color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity))
  text-decoration: none
  transition: .2s ease-in-out

  &:hover
    color: rgba(25, 118, 210, 1)
</style>
