<template>
    <div class="home">
        <div class="banner">MAGE<br>MASH</div>
        <button class="start-btn">Start</button>
    </div>
</template>

<script>
export default {
    name: 'HomePage'
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
    font-size: 5vw; /* This will resize the font based on the width of the viewport */
}

.start-btn {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 24px;
    cursor: pointer;
}
</style>
