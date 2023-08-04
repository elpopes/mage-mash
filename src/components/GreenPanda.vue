<template>
    <div class="card">
      <h2>{{ name }}</h2>
      <ul>
        <li>Type: {{ type }}</li>
        <li>HP: {{ hp }}</li>
        <li>Moves: 
          <ul>
            <li v-for="move in moves" :key="move.name">{{ move.name }}</li>
          </ul>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'GreenPanda',
    data() {
      return {
        name: 'Green Panda',
        type: 'Earth',
        hp: 120,
        moves: [
          { name: 'Heal', type: 'Defense', healing: 20 },
          { name: 'Rage Attack', type: 'Offense', damage: 'variable' }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .card {
    border: 1px solid #000;
    padding: 10px;
  }
  </style>
  

  