<script>
  export default {
    name: 'AppLoading',
    data () {
      return {
        messages: [
          'Loading your next quest...',
          'Sharpening swords and syncing tasks...',
          'Charting the path to your objectives...',
          'Summoning your quest log...',
          'Preparing your mission briefing...',
          'Gathering intel for your next adventure...',
          'Equipping your task gear...',
          'Scanning the realm for pending quests...',
          'Assembling your to-do party...',
          'Loading side quests...',
          'Assigning XP to completed tasks...',
          'Unlocking your next challenge...',
          'Rolling for initiative...',
          'Forging new tasks in the quest forge...',
          'Marking objectives on your map...',
          'Updating quest progress...',
          'Summoning daily challenges...',
          'Sorting tasks by difficulty...',
          'Calling your companions to action...',
          'Charging up your quest tracker...',
        ],
      }
    },
    computed: {
      randomMessage () {
        return this.messages[Math.floor(Math.random() * this.messages.length)];
      },
    },
  }
</script>

<template>
  <div class="loading">{{ randomMessage }}</div>
</template>

<style>


</style>
