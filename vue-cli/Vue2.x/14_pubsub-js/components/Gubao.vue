<template>
  <div class="text-color">
    <h1 @click="sendName">Hi {{ name }}</h1>
    <h1>{{ action }}</h1>
    <h2>{{ age }}</h2>

  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: "Gubao",
  data() {
    return {
      name: "Gubao!",
      action:'BOBO',
      age: 4,
    };
  },
  methods:{
    sendName(){
      // this.$bus.$emit('getName',this.name)
      pubsub.publish('getName',this.name)
    }
  }

};
</script>

<style scoped>
.text-color{
  color: coral;
}
</style>