<template>
  <img alt="Vue logo" src="./assets/logo.png" class="mb-5" style="max-width: 150px" />
  <LogIn msg="Welcome to Your Vue.js App" />
</template>

<script>
import LogIn from "./components/LogIn.vue";

export default {
  name: "App",
  components: {
    LogIn,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
