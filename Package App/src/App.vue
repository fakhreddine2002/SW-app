<template>
  <div id="app">
    <NavBar1 />
    <router-view />
  </div>
</template>

<script>
import NavBar1 from './components/NavBar1.vue';

export default {
  components: {
    NavBar1,
  },
};
</script>

<style>
/* Reset and global styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  min-height: 100vh; /* Ensure the entire app covers the full viewport height */
  background-color: #1c1c1c;
  background-image: linear-gradient(135deg, rgba(255, 255, 255, 0.02) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.02) 50%, rgba(255, 255, 255, 0.02) 75%, transparent 75%, transparent);
  background-size: 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
  font-size: 20px;
  color: #dddddd;
  text-align: center;
}
</style>
