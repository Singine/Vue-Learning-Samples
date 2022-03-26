<template>
  <div class="text-color">
    <h1>{{ name }}</h1>
    <h2>{{ age }}</h2>
    <h2 v-show='newName'>{{ newName }}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
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
    // this.$bus.$on('getName',(data)=>{
    //   this.newName = data
    // })

    this.pubid = pubsub.subscribe('getName',function(name,data){
      console.log('有新消息发布了！',data)
      this.newName = data
    })

  },
  beforeDestroy(){
    // this.$bus.$off('getName')

    pubsub.unsubscribe(this.pubid)

  }
};
</script>

<style scoped>
.text-color {
  color: cornflowerblue;
}
</style>

