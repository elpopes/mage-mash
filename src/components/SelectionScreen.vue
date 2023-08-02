<template>
    <div>
      <div class="bench">
        <div v-for="card in cards" :key="card.name">
          <component :is="card.component" />
        </div>
      </div>
      <div class="selection-area">
        <!-- The player's selections -->
      </div>
      <button class="ready-button">Ready!</button>
    </div>
</template>

<script>
import GreenPanda from './GreenPanda.vue';
import BlueBird from './BlueBird.vue';
import PurpleSnake from './PurpleSnake.vue';

export default {
  name: 'SelectionScreen',
  components: {
    GreenPanda,
    BlueBird,
    PurpleSnake
  },
  data() {
    return {
      cards: [
        { name: 'GreenPanda', component: GreenPanda },
        { name: 'BlueBird', component: BlueBird },
        { name: 'PurpleSnake', component: PurpleSnake }
      ],
    };
  }
};
</script>


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
