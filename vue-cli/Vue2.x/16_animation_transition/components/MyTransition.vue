<template>
  <div>
    <button @click="isShow = !isShow">按我变变</button>
    <transition-group name="bobo" appear>
      <h1 class="huihui" v-show="isShow" key="1">Hi 灰灰</h1>
      <h1 class="yaoyao" v-show="isShow" key="2">Hi 药药</h1>
    </transition-group>
  </div>
</template>

<script>
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
h1.huihui {
  color: #888;
}
h1.yaoyao {
  color: rgb(67, 190, 83);
}

.bobo-enter-active,
.bobo-leave-active {
  transition: 1s all ease;
}

.bobo-enter,
.bobo-leave-to {
  transform: translateX(-100%);
}

.bobo-enter-to,
.bobo-leave {
  transform: translateX(0);
}
</style>