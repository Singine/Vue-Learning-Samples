<template>
  <div>
    <h1>{{ msg }}</h1>
    <h1>Hi {{ name }}</h1>
    <h2>{{ newAge }}</h2>
    <h2>{{ sex }}</h2>
    <button @click="addAge">点点变大大</button>
  </div>
</template>

<script>
export default {
  name: "Baby",
  data() {
    return {
      msg: "Gubao bobo!",
      newAge: this.age,
    };
  },
  methods: {
    addAge() {
      this.newAge++;
    },
  },

  //   props:['name','age','sex'],

  //   props: {
  //     name: String,
  //     age: Number,
  //     sex: String,
  //   },

  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      default: 0,
    },
    sex: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>