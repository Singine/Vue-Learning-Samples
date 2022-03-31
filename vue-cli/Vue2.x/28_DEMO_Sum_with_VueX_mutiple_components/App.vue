<template>
  <div id="app">
    <Count />
    <hr>
    <Baby />
  </div>
</template>

<script>
import Count from "./components/Count";
import Baby from "./components/Baby";
export default {
  name: "App",
  components: {
    Count,
    Baby,
  },
};
</script>

<style>
</style>
