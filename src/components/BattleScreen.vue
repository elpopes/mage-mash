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
  import { deepClone } from './utils.js'; 
  import baddies from './Baddies.js';
  
  export default {
    name: 'BattleScreen',
    components: {
      Card
    },
    props: {
      selectedCard: Object
    },
    data() {
        return {
            playerCard: deepClone(this.selectedCard),
            currentBaddie: baddies.level01[Math.floor(Math.random() * baddies.level01.length)]
        };
    },
    methods: {
      attack() {
        this.currentBaddie.hp -= 10;
      }
    }
  };
  </script>
  
  <style scoped>
  .battle-container {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 100vh;
      background-color: #f3f4f6;
      padding: 2rem 5rem;
  }
  
  .player-side, .baddie-side {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2rem;
      border: 2px solid #e5e7eb;
      border-radius: 1rem;
      background-color: #ffffff;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
  
  button {
      padding: 0.5rem 1rem;
      font-size: 1rem;
      background-color: #0b9710;
      color: #ffffff;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: background-color 0.3s;
      margin-top: 2rem;
  }
  
  button:hover {
      background-color: #088c07;
  }
  </style>
  