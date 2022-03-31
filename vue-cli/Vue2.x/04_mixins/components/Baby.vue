<template>
  <div>
    <h1>{{ msg }}</h1>
    <h1 @click="showName">Hi {{ name }}</h1>
    <h2>{{ age }}</h2>
    
  </div>
</template>

<script>
// import {mixin} from '../mixin'
export default {
  name: "Baby",
  data() {
    return {
      msg: "Gubao bobo!",
      name:'Huihui',
      age: 1,
    };
  },
//   mixins:[mixin]


};
</script>

<style>
</style>