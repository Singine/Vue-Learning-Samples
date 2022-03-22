<template>
  <div id="Baby">
    <h2 v-for="(n, index) in name" :key="index">宝宝名字：{{ n }}</h2>
    <h2>宝宝年龄：{{ age }}</h2>
    <button @click="addBaby">点点加宝宝</button>
  </div>
</template>

<script>
export default {
  name: "Baby",
  data() {
    return {
      name: ["灰灰"],
      age: 1,
    };
  },
  methods: {
    addBaby() {
      this.name.push("药药");
    },
  },
};
</script>

