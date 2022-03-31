<template>
  <div class="header">
    <h2>Vue Router Demo</h2>
  </div>
</template>

<script>
export default {
  name: "Header",
  mounted() {
    console.log("Header组件挂载完毕");
  },
  beforeDestroy() {
    console.log("Header组件即将销毁");
  },
};
</script>

<style scoped>
.header {
  position: relative;
  display: block;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}
h2 {
  color: #333;
  line-height: 60px;
}
</style>