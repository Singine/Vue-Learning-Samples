<template>
  <ul>
    <li>宠物名字：{{ name }}</li>
    <li>宠物描述：{{ msg }}</li>
  </ul>
</template>

<script>
export default {
  name: "DetailsPet",
  props: ["name", "msg"],
};
</script>

<style>
</style>