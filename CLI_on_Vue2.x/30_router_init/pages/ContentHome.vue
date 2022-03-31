<template>
  <div class="content">
    <h2>Home page</h2>
  </div>
</template>

<script>
export default {
  name: "Content",
   mounted(){
    console.log('Home组件挂载完毕')
  },
  beforeDestroy(){
    console.log('Home组件即将销毁')
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