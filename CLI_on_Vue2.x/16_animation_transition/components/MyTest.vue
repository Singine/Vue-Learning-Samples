<template>
  <div>
    <button @click="isShow = !isShow">按我变变</button>
    <transition-group 
    appear
    name="animate__animated animate__bounce" 
    enter-active-class="animate__jackInTheBox"
    leave-active-class="animate__hinge"
    >
      <h1 class="gagaga" v-show="isShow" key="1">Hi 嘎嘎嘎</h1>
      <h1 class="wawawawa" v-show="isShow" key="2">Hi 哇哇哇哇</h1>
    </transition-group>
  </div>
</template>

<script>
import "animate.css";
export default {
  name: "MyTransition",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1.gagaga {
  color: rgb(41, 126, 223);
}
h1.wawawawa {
  color: rgb(142, 74, 219);
}
</style>