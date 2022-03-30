<template>
  <ul>
    <li>宝宝名字：{{this.$route.query.name}}</li>
    <li>宝宝年龄：{{this.$route.query.age}}</li>
  </ul>
</template>

<script>
export default {
  name: "GubaoDetails",
 
};
</script>

<style>
</style>