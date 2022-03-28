<template>
  <div id="app">
    <h1>展示标签</h1>
    <div class="categoryBox">
      <Category :title="dataArr[0].title">
        <ul slot="center">
          <li v-for="(list, index) in dataArr[0].list" :key="index">{{ list }}</li>
        </ul>
        <span slot="footer">我想咕宝了</span>
      </Category>
      <Category :title="dataArr[1].title">
        <img slot="center" src="../public/gubao.jpg" width="100%" />
        <span slot="footer">{{dataArr[1].list[0]}}</span>
      </Category>
      <Category :title="dataArr[2].title">
        <ul slot="center">
          <li v-for="(list, index) in dataArr[2].list" :key="index">{{ list }}</li>
        </ul>
        <span slot="footer">我想咕宝了</span>
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
  data() {
    return {
      dataArr: [
        { title: "宝宝的宝宝", list: ["灰灰", "药药", "嘎嘎嘎", "哇哇哇哇"] },
        { title: "宝宝", list: ["咕宝"] },
        { title: "动物宝宝们", list: ["嘿嘿", "边边", "獭獭", "龟龟"] },
      ],
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
span{
  position: relative;
  display: block;
  width: 100%;
  text-align: center;
  margin-bottom: 30px;
}

</style>
