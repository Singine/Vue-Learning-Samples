<template>
  <div class='demo'>
      <h1>Hi {{name}}</h1>
      <h2>{{action}}</h2>
  </div>
</template>

<script>
export default {
    name:'Gubao',
    data() {
        return {
            name:'Gubao',
            action:'Bobo!'
        }
    },
}
</script>

<style>
    .demo{
        color: coral;
    }
</style>