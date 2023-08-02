<template>
    <div>
      <Draggable v-model="cards" class="bench">
        <div v-for="card in cards" :key="card">
          <component :is="card" />
        </div>
      </Draggable>
      <div class="selection-area">
        <!-- The player's selections -->
      </div>
      <button class="ready-button">Ready!</button>
    </div>
</template>
  

<script>
import Draggable from 'vuedraggable';

import GreenPanda from './GreenPanda.vue';
import BlueBird from './BlueBird.vue';
import PurpleSnake from './PurpleSnake.vue';

export default {
  name: 'SelectionScreen',
  components: {
    Draggable,
    GreenPanda,
    BlueBird,
    PurpleSnake
  },
  data() {
    return {
      cards: ['GreenPanda', 'BlueBird', 'PurpleSnake'],
    };
  }
};
</script>
