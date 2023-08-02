<template>
    <div class="home">
        <div class="banner">
            <div class="line1">MAGE</div>
            <div class="line2">MASH</div>
        </div>
        <button class="start-btn" @click="startGame">Start</button>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    methods: {
        startGame() {
            this.$router.push({ name: 'SelectionScreen' });
        }
    }
}
</script>

<style scoped>
.home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
    font-family: 'Bungee Spice', sans-serif;
}

.banner {
    font-size: 15vw;
}

.banner .line1, .banner .line2 {
    line-height: 0.75;  
}

.start-btn {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 24px;
    cursor: pointer;
}
</style>
