<template>
  <div>
    <h1>{{ msg }}{{ name }}</h1>
    <hr />
    <Gubao />
    <hr />
    <Baby />
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
  data() {
    return {
      msg: "好",
      name: "宝宝",
    };
  },
};
</script>

<style>
</style>
