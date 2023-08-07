  <template>
    <div class="container">
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
        <button class="ready-button" :class="{ 'bench-full': isBenchFull }" @click="goToBattle">Ready!</button>
    </div>
</template>

<script>
import CardClass from './CardClass.vue';
import cards from './AllCards.js'

export default {
    name: 'SelectionScreen',
    components: {
        CardClass,
    },
    data() {
        return {
        cards: cards,
        bench: []
      };
    },
    computed: {
        isBenchFull() {
            return this.bench.length === 3;
        },
    },
    methods: {
        selectCard(cardName) {
            const card = this.cards.find(c => c.name === cardName);
            this.bench.push(card);
            this.cards = this.cards.filter(c => c.name !== card.name);
        },
        goToBattle() {
            if(this.isBenchFull) {
                this.$router.push({
                    name: 'battle',
                    params: { cardId: this.bench[0].name } 
                });
            }
}


    }
};
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh; /* ensure it fills full view height */
}
.bench, .selection-area {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 200px;
    margin-bottom: 30px;
}
.bench {
    border-radius: 50px;
    background-color: #0b9710;
    align-items: center;
}
.ready-button {
    display: block;
    margin: auto;
    padding: 10px 20px;
    font-size: 24px;
    cursor: pointer;
    transition: background-color 0.3s;
}
.bench-full {
    background-color: lime;
    color: black;
}
</style>
