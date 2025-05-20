<template>
  <v-app>
    <Navbar />
    <v-main class="mx-8 my-6">
      <v-container v-if="$route.name !== 'home' && authUser === false">
        <app-loading />
      </v-container>


      <router-view v-else />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script>
  import AppLoading from '@/components/AppLoading';
  import Navbar from '@/components/Navbar';
  import AppFooter from '@/components/AppFooter';
  export default {
    name: 'App',
    components: { AppFooter, Navbar, AppLoading },
    data () {
      return {

      };
    },
  };
</script>
