<template>
  <div id="app">
    <h1>展示标签</h1>
    <div class="categoryBox">
      <Category
        v-for="(data, index) in dataArr"
        :key="index"
        :listData="data"
      />
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
  data() {
    return {
      dataArr: [
        {title:'宝宝的宝宝',list:["灰灰", "药药", "嘎嘎嘎", "哇哇哇哇"]},
        {title:'宝宝',list:["咕宝"]},
        {title:'动物们',list:["嘿嘿", "边边", "獭獭", "龟龟"]}
      ]
      
    };
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
</style>
