<template>
  <div>
    <h1>{{msg}}{{name}}</h1>
    <Gubao :getGubaoAge="getGubaoAge"/>
    <hr>
    <!-- <Baby v-on:getName="getName" /> -->
    <!-- <Baby @getName="getName" /> -->
    <!-- <Baby @click.native="getName" /> -->
    <Baby ref="Baby" />

  </div>
</template>

<script>
import Gubao from "./components/Gubao";
import Baby from "./components/Baby";
export default {
  name: "App",
  components: {
    Gubao,
    Baby
  },
  data() {
    return {
      msg:'好',
      name:'宝宝',
    }
  },
  methods:{
    getGubaoAge(age){
      console.log(age)
    },
    getName(name,...params){
      console.log(name,params)
      this.name = name
    }
  },
  mounted(){
    this.$refs.Baby.$on('getName',this.getName)
    // this.$refs.Baby.$once('getName',this.getName)
  }
};
</script>

<style>
</style>
