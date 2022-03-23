<template>
  <div>
    <img src="./assets/logo.png" alt="logo">
    <Gubao></Gubao>
    <Baby></Baby>
  </div>
</template>

<script>
import Gubao from "./components/Gubao";
import Baby from "./components/Baby";
export default {
  name: "App",
  components: {
    Gubao,
    Baby,
  },
};
</script>

<style>
</style>