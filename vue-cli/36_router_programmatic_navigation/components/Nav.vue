<template>
  <div class="nav">
    <router-link active-class="active" :to="{name:'Homepage'}" >Home</router-link>
    <router-link active-class="active" to="/gubao">Baby</router-link>
  </div>
</template>

<script>
export default {
  name: "Nav",
     mounted(){
    console.log('Nav组件挂载完毕')
  },
  beforeDestroy(){
    console.log('Nav组件即将销毁')
  }
};
</script>

<style scoped>

div.nav {
  position: relative;
  display: block;
  width: 100%;
  height: 300px;
  flex: 1;
  padding: 0;
  margin-top: 20px;
}
div.nav a {
  display: block;
  width: 120px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  color: #333;
  background-color: #fff;
  border: 1px solid #333;
  margin-top: -1px;
  cursor: pointer;
  text-decoration: none;
}
div.nav a:hover {
  color: #fff;
  background-color: #666;
}
div.nav a.active {
  color: #fff;
  background-color: #333;
}
</style>