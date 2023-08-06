<template>
    <div class="battle-container">
      <div class="player-side">
        <!-- Display Player's Card -->
        <Card :data="playerCard" />
      </div>
      <div class="baddie-side">
        <!-- Display Baddie -->
        <Card :data="currentBaddie" />
      </div>
      <button @click="attack">Attack</button>
    </div>
  </template>
  
  <script>
  import Card from './Card.vue';
  import { deepClone } from './utils.js';  // Assume deepClone is in a utils file
  import baddies from './Baddies.js';
  
  export default {
    name: 'BattleScreen',
    components: {
      Card
    },
    props: {
      selectedCard: Object  // The card selected by the user for battle
    },
    data() {
      return {
        playerCard: deepClone(this.selectedCard),  // Clone the card for gameplay
        currentBaddie: baddies.level01[Math.floor(Math.random() * baddies.level01.length)] // Just a random baddie for demo
      };
    },
    methods: {
      attack() {
        // Example attack logic
        this.currentBaddie.hp -= 10; // Reducing HP for demonstration
      }
    }
  };
  </script>
  
  <style scoped>
  /* Your styling here */
  </style>
  