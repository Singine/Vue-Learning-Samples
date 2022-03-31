<template>
  <div>
    <h1>Hi {{ name | mySlice }}</h1>
    <h2>{{ age }}</h2>
    <button @click="showShow">点点想咕宝</button>
  </div>
</template>

<script>
export default {
  name: "Gubao",
  data() {
    return {
      name:'GubaoBOBO',
      age: 4,
    };
  },
  methods:{
    showShow(){
      this.hello()
    }
  }

};
</script>

<style>
</style>