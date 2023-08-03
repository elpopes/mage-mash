<template>
    <div class="card" @click="handleClick">
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
    name: 'CardClass',
    props: {
      name: String,
      type: String,
      hp: Number,
      moves: Array
    },
    methods: {
      handleClick() {
        this.$emit('card-clicked', this.name);
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
  