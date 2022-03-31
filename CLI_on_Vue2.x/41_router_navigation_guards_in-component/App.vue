<template>
  <div id="app">
    <Header />
    <div class="main">
      <Nav />
      <!-- 只是不走销毁流程 组件也不会重新加载 -->
      <!-- include 是组件名 -->
      <keep-alive :include="['Content']">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Nav from "./components/Nav";
export default {
  name: "App",
  components: {
    Nav,
    Header,
  },
};
</script>

<style>
#app {
  position: relative;
  width: 900px;
  height: auto;
  margin: 0 auto;
}
.main {
  position: relative;
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
}
</style>
