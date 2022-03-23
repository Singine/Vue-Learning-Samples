<template>
  <div id="Gubao">
    <h1>{{ hello }}</h1>
    <h2>{{ action }}</h2>
    <h2>{{ address }}</h2>
    <Sub></Sub>
    <button @click="showThis">点点</button>
  </div>
</template>

<script>
export default {
  name: "MyGubao",
  data() {
    return {
      hello: "Hi Gubao!",
      action: "啵啵",
      address: "地球",
    };
  },
  methods: {
    showThis() {
      console.log(this);
      console.log(this.hello);
      console.log(this._data);
    },
  },
};
</script>

<style>
#Gubao {
  color: chocolate;
}
</style> 