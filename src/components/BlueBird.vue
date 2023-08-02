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
    name: 'BlueBird',
    data() {
      return {
        name: 'Blue Bird',
        type: 'Air',
        hp: 90,
        moves: [
          { name: 'Sleep Spell', type: 'Control', effect: 'Sleep' },
          { name: 'Inspire', type: 'Support', effect: 'Boost' }
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
  