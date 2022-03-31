<template>
  <div>
    <h1 @click="showName">Hi {{ name }}</h1>
    <h2>{{ age }}</h2>
    
  </div>
</template>

<script>
// import {mixin,mixin2} from '../mixin'
export default {
  name: "Gubao",
  data() {
    return {
      name:'Gubao',
      age: 4,
    };
  },
  // mixins:[mixin,mixin2]


};
</script>

<style>
</style>