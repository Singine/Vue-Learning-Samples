<template>
  <div class="text-color">
    <h1>{{ msg }}</h1>
    <h1>{{ action }}</h1>
    <h2>{{ age }}</h2>
    <button @click="updateGubaoAge">点点获取年龄</button>
  </div>
</template>

<script>
export default {
  name: "Gubao",
  data() {
    return {
      msg: "Hi Gubao!",
      action:'BOBO',
      age: 4,
    };
  },
  props:['getGubaoAge'],
  methods:{
    updateGubaoAge(){
      this.getGubaoAge(this.age)
    }
  }

};
</script>

<style scoped>
.text-color{
  color: coral;
}
</style>