<template>
  <div class="text-color">
    <h1>{{ name }}</h1>
    <h2>{{ age }}</h2>
  </div>
</template>

<script>
export default {
  name: "Baby",
  data() {
    return {
      name: "Huihui",
      age: 1,
    };
  },
};
</script>

<style scoped>
.text-color{
  color: cornflowerblue;
}
</style>

