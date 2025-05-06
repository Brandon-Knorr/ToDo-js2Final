<template>
  <v-app>
    <Navbar />
    <v-main class="mx-8 my-6">
      <router-view />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import AppFooter from "@/components/AppFooter";
export default {
  name: "App",
  components: { Navbar, AppFooter },
  data() {
    return {
      //
    };
  },
};
</script>
