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
    name: 'PurpleSnake',
    data() {
      return {
        name: 'Purple Snake',
        type: 'Poison',
        hp: 90,
        moves: [
          { name: 'Quick Strike', type: 'Offense', damage: 'variable' },
          { name: 'Venom Strike', type: 'Offense', damage: 'constant', effect: 'Poison' }
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
  