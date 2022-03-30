<template>
  <div class="content">
    <h2>Home page</h2>
    <h3 :style="{ opacity }">Gubao BOBO!</h3>
    <input ref="homeInput" type="text" />
  </div>
</template>

<script>
export default {
  name: "Content",
  data() {
    return {
      opacity: 1,
    };
  },
  // mounted() {
  //   console.log("Home组件挂载完毕", this.$refs);
  //   this.$refs.homeInput.focus();
  //   this.timer = setInterval(() => {
  //     console.log("@")
  //     this.opacity -= 0.01;
  //     if (this.opacity <= 0) {
  //       this.opacity = 1;
  //     }
  //   }, 10);
  // },
  // beforeDestroy() {
  //   console.log("Home组件即将销毁");
  //   clearInterval(this.timer);
  // },
  activated() {
    this.$refs.homeInput.focus();
    this.timer = setInterval(() => {
      console.log("@");
      this.opacity -= 0.01;
      if (this.opacity <= 0) {
        this.opacity = 1;
      }
    }, 10);
  },
  deactivated() {
    clearInterval(this.timer);
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