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
        padding: 20px;
        background-color: white;
        border-radius: 15px;
        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);
        width: 200px; 
        height: 250px; 
        display: flex;
        flex-direction: column;
        justify-content: space-between; 
        transition: 0.3s;
    }
    
    .card:hover {
        transform: scale(1.02); 
        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3); 
    }
    
    .card h2 {
        margin-top: 0;
    }
    
    .card ul {
        list-style-type: none; 
        padding: 0; 
    }
    
    .card ul li {
        padding: 5px 0; 
    }
    </style>
    
  