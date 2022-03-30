<template>
  <div class="header">
    <h2>Vue Router Demo</h2>
    <button @click="forward">前进</button>
    <button @click="back" class="firstBtn">后退</button>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    forward() {
      this.$router.forward();
    },
    back() {
      this.$router.back();
    },
  },
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
  display: inline;
}

button.firstBtn {
  margin-right: -1px;
}
button {
  position: relative;
  display: block;
  float: right;
  outline: none;
  background-color: #fff;
  border: 1px solid #333;
  color: #333;
  width: 100px;
  height: 40px;
  line-height: 40px;
  padding: 0;
  cursor: pointer;
  box-sizing: border-box;
  margin-top: 10px;
}
button:hover {
  background-color: #333;
  color: #fff;
}

button.active {
  color: #fff;
  background-color: #333;
}
</style>