<template>
  <div class="content">
    <h2>Home page</h2>
    <input ref="homeInput" type="text" />
  </div>
</template>

<script>
export default {
  name: "Content",
  mounted() {
    console.log("Home组件挂载完毕", this.$refs);
    this.$refs.homeInput.focus();
  },
  beforeDestroy() {
    console.log("Home组件即将销毁");
  },
};
</script>

<style scoped>
.content {
  position: relative;
  width: 100%;
  height: 300px;
  flex: 4;
}
input {
  width: 200px;
  height: 30px;
  border: 1px solid #333;
  padding: 5px 10px;
}
input:focus {
  outline: none;
}
</style>