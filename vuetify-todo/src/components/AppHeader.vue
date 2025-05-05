<template>
  <div>
    <v-app-bar :elevation="2" rounded class="">
      <template v-slot:prepend>
        <v-app-bar-nav-icon class="p-0"></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>MainQUEST<v-icon>mdi-feather</v-icon></v-app-bar-title>

      <template v-slot:append> </template>
    </v-app-bar>
  </div>
</template>

<script></script>

<style lang="sass">
@use '../styles/settings.scss'
</style>
