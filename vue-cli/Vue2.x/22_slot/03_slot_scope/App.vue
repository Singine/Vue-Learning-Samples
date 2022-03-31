<template>
  <div id="app">
    <h1>展示标签</h1>
    <div class="categoryBox">
      <Category title="宝宝们">
        <template slot-scope="{dataArr}">
          <ul>
            <li v-for="(list, index) in dataArr" :key="index">
              {{ list }}
            </li>
          </ul>
        </template>
      </Category>
      <Category title="宝宝们">
        <template slot-scope="{dataArr}">
          <ul>
            <li v-for="(list, index) in dataArr" :key="index">
              {{ list }}
            </li>
          </ul>
        </template>
      </Category>
      <Category title="宝宝们">
        <template slot-scope="{dataArr}">
          <ul>
            <li v-for="(list, index) in dataArr" :key="index">
              {{ list }}
            </li>
          </ul>
        </template>
      </Category>
    </div>
  </div>
</template>

<script>
import Category from "./components/Category";
export default {
  name: "App",
  components: {
    Category,
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
.categoryBox {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 906px;
}
span {
  position: relative;
  display: block;
  width: 100%;
  text-align: center;
  margin-bottom: 30px;
}
</style>
