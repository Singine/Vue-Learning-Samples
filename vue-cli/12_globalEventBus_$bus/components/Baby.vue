<template>
  <div class="text-color">
    <h1>{{ name }}</h1>
    <h2>{{ age }}</h2>
    <h2 v-show='newName'>{{ newName }}</h2>
  </div>
</template>

<script>
export default {
  name: "Baby",
  data() {
    return {
      name: 'Huihui',
      age: 1,
      newName:''
    };
  },
  mounted(){
    this.$bus.$on('getName',(data)=>{
      this.newName = data
    })
  },
  beforeDestroy(){
    this.$bus.$off('getName')
  }
};
</script>

<style scoped>
.text-color {
  color: cornflowerblue;
}
</style>

