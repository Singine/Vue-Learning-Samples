<template>
  <div>
      <h1 v-text="hello" ref="title"></h1>
      <button @click="showElement">点点输出上方dom元素</button>
      <Gubao ref="gu"/>
  </div>
</template>

<script>
import Gubao from './components/Gubao'
export default {
    name:'App',
    components:{
        Gubao
    },
    data() {
        return {
            hello:'咕宝'
        }
    },
    methods:{
        showElement(){
            console.log(this.$refs)
        }
    }
}

</script>

<style>

</style>