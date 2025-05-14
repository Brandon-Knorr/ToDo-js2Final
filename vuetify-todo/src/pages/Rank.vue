<script>
import Navbar from '../components/Navbar.vue';
  export default {
    data() {
      return {
        ranks: [
          { name: 'Squire', icon: 'mdi-kid-star' },
          { name: 'Scribe', icon: '' },
          { name: 'Knight', icon: '' },
          { name: 'Mystic Taskmaker', icon: '' },
          { name: 'Celestial Planner', icon: '' },
          { name: 'Spellbound Strategist', icon: '' },
          { name: 'Grand Mage of Deeds', icon: '' },
        ]
      }
    },
  };
</script>


<template>
  <Navbar></Navbar>
<h1 class="text-h5 font-weight-light">Rank</h1>

<v-container class="my-5">
<v-row class="d-flex flex-wrap">
  <v-card v-ripple density="compact" color="#ecdcf9" hover ripple class="text-center PA-3 ma-3"
          v-for="rank in ranks" :key="ranks.name">
    <v-responsive class="pt-4">
      <v-avatar size="100">

      </v-avatar>
    </v-responsive>
    <v-text class="text-caption"> {{ rank.name }} </v-text>
    <v-card-actions>
      <v-btn>
        <v-icon>
          <span>hi</span>
        </v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</v-row>

</v-container>
</template>
