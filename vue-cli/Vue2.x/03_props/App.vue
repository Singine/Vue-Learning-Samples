<template>
  <div>
    <Baby name="Huihui" :age="18" sex="male" />
  </div>
</template>

<script>
import Baby from "./components/Baby";
export default {
  name: "App",
  components: {
    Baby,
  },
};
</script>

<style>
</style>
