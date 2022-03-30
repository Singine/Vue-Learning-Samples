<template>
  <div class="content">
    <h2>咕宝的宝宝很好的</h2>
    <h3 v-for="baby in babyList" :key="baby.id">{{ baby.name }}</h3>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Content",
  computed: {
    ...mapState("Baby", ["babyList"]),
  },
  mounted(){
    console.log('Baby组件挂载完毕')
    console.log(this)

  },
  beforeDestroy(){
    console.log('Baby组件即将销毁')
  }
};
</script>

<style scoped>
.content {
  position: relative;
  width: 100%;
  height: 300px;
  flex: 4;
}
</style>