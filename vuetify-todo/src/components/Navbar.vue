<script>
  import Popup from './Popup.vue'
  import login from '@/pages/Login.vue';
  export default {
    components: { Popup },
    data () {
      return {
        drawer: false,
        links: [
          { icon: 'mdi-castle', text: 'Home', route: '/home' },
          { icon: 'mdi-shield-account', text: 'Profile', route: '/profile' },
          { icon: 'mdi-script-text-outline', text: 'Quests', route: '/quests' },
        ],
      };
    },
    computed: {

    },
  };
</script>

<template>
  <nav>
    <v-app-bar :elevation="2" tile>
      <template #prepend>
        <v-app-bar-nav-icon elevation="2" @click="drawer = !drawer" />
      </template>

      <v-app-bar-title>
        <span class="font-weight-light">MAIN</span>
        <span>QUEST</span>
        <v-icon>mdi-feather</v-icon>
      </v-app-bar-title>
      <v-btn v-if="authUser == true" append-icon="mdi-logout" elevation="2" text="Sign Out" />
      <v-btn
        v-else
        append-icon="mdi-logout"
        elevation="2"
        text="Sign In"
        @click="login"
      />
    </v-app-bar>
  </nav>

  <v-navigation-drawer v-model="drawer" app>
    <v-row>
      <v-col class="d-flex align-center mt-10">
        <v-avatar size="100" />
        <p class="text-subtitle mt-3">Big Key</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <popup />
      </v-col>
    </v-row>
    <v-list bg-color="#bd86ea" nav>
      <v-list v-for="link in links" :key="link.text" bg-color="#bd86ea" tile>
        <v-list-item-action>
          <v-btn
            active-color="#73954b"
            block
            color="#afc893"
            :prepend-icon="link.icon"
            :to="link.route"
          >
            {{ link.text }}
          </v-btn>
        </v-list-item-action>
      </v-list>
    </v-list>
  </v-navigation-drawer>
</template>
