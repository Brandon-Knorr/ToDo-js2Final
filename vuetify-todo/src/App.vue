<template>
  <v-app>
    <v-main>
      <Navbar />
      <router-view />
      <AppFooter />
    </v-main>
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
