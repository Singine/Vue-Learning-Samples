<template>
  <div>
    <button @click="isShow = !isShow">按我变变</button>
    <transition name="bobo" appear>
        <h1 v-show="isShow">Hi 咕宝</h1>
    </transition>
    <!-- <transition name="bobo" :appear="true">
        <h1 v-show="!isShow">Hi 灰灰</h1>
    </transition> -->
    
  </div>
</template>

<script>
export default {
  name: "MyAnimation",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  color: orange;
}

.bobo-enter-active{
    animation: bobo 1s ease;
}

.bobo-leave-active{
    animation: bobo 1s reverse ease;
}

@keyframes bobo {
    from{
        transform: translateX(-100%);
    }
    to{
        transform: translateX(0px);
    }
}


</style>