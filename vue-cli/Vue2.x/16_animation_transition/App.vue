<template>
<div>
  <MyAnimation />
  <MyTransition />
  <MyTest />
</div>
 
</template>

<script>
import MyAnimation from "./components/MyAnimation";
import MyTransition from "./components/MyTransition";
import MyTest from "./components/MyTest";

export default {
  name: "App",
  components: {
    MyAnimation,
    MyTransition,
    MyTest
  },
};
</script>

<style>
</style>
