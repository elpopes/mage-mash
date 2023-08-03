<template>
    <div>
      <div class="bench">
        <CardClass
          v-for="card in bench"
          :key="card.name"
          :name="card.name"
          :type="card.type"
          :hp="card.hp"
          :moves="card.moves"
        />
      </div>
      <div class="selection-area">
        <CardClass
          v-for="card in cards"
          :key="card.name"
          @card-clicked="selectCard"
          :name="card.name"
          :type="card.type"
          :hp="card.hp"
          :moves="card.moves"
        />
      </div>
      <button class="ready-button">Ready!</button>
    </div>
  </template>
  
  <script>
  import CardClass from './CardClass.vue';
  
  export default {
    name: 'SelectionScreen',
    components: {
      CardClass,
    },
    data() {
      return {
        cards: [
          { 
            name: 'GreenPanda', 
            type: 'Earth', 
            hp: 120, 
            moves: [
              { name: 'Heal', type: 'Defense', healing: 20 },
              { name: 'Rage Attack', type: 'Offense', damage: 'variable' }
            ]
          },
          { 
            name: 'BlueBird', 
            type: 'Air', 
            hp: 80, 
            moves: [
              { name: 'Sleep Spell', type: 'Control', effect: 'Sleep' },
              { name: 'Inspire', type: 'Support', effect: 'Boost' }
            ]
          },
          { 
            name: 'PurpleSnake', 
            type: 'Poison', 
            hp: 100, 
            moves: [
              { name: 'Poison Bite', type: 'Offense', damage: 30 },
              { name: 'Shed Skin', type: 'Defense', healing: 'variable' }
            ]
          }
        ],
        bench: []
      };
    },
    methods: {
      selectCard(cardName) {
        const card = this.cards.find(c => c.name === cardName);
        this.bench.push(card);
        this.cards = this.cards.filter(c => c.name !== card.name);
      }
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
  