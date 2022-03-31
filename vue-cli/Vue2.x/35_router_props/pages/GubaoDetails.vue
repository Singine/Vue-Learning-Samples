<template>
  <ul>
    <li>宝宝名字：{{ name }}</li>
    <li>宝宝年龄：{{ age }}</li>
  </ul>
</template>

<script>
export default {
  name: "GubaoDetails",
  props: ["name", "age"],
};
</script>

<style>
</style>