<template id="app">
  <router-view/>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html{
  background-image: url("./assets/bg.jpeg");
  background-size: cover;
  overflow: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
</style>
