<template>
  <v-app>
    <snackBar />
    <router-view />
  </v-app>
</template>

<script>
import snackBar from "./components/snackBar/snackBar.vue";

export default {
  name: "App",
  components: {
    snackBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
