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
  


<style scoped>
.bench {
  display: flex;
  width: 100%;
  height: 200px;
  border-radius: 50px;
  background-color: #ccc;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 30px;
}

.selection-area {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 200px;
  margin-bottom: 30px;
}

.ready-button {
  display: block;
  margin: auto;
  padding: 10px 20px;
  font-size: 24px;
  cursor: pointer;
}
</style>
