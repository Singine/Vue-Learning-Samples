<template>
  <div id="app">
    <h1>搜索Github用户</h1>
    <Search />
    <Result />
  </div>
</template>

<script>

import Search from "./components/Search";
import Result from "./components/Result";
export default {
  name: "App",
  components: {
    Search,
    Result,
  },
  
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  text-align: center;
}

</style>
