<template>
  <div class="category">
    <h2>{{title}}</h2>
    <slot :dataArr="dataArr">Slot Error!</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props:['title'],
  data() {
    return {
      dataArr: ["灰灰", "药药", "嘎嘎嘎", "哇哇哇哇"],
    };
  },
};
</script>

<style scoped>
.category {
  position: relative;
  width: 200px;
  min-height: 100px;
  margin: 30px 50px;
  background-color: #fff;
  border: 1px solid #333;
  border-radius: 10px;
  box-shadow: 6px 6px 5px 5px rgba(0, 0, 0, 0.2);
}
h2 {
  position: absolute;
  width: 100%;
  height: 50px;
  text-align: center;
  background-color: #333;
  color: #fff;
  padding: 5px;
  line-height: 50px;
  top: 0px;
  left: -5px;
  border-radius: 5px;
  box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.3);
  letter-spacing: 3px;
}
ul {
  position: relative;
  width: calc(100% - 60px);
  list-style: none;
  margin: 100px auto 40px 30px;
  padding: 0;
}
ul li {
  text-decoration: none;
  list-style: none;
  margin: 10px 0;
}

img {
  position: relative;
  width: calc(100% - 40px);
  margin: 100px 20px 30px 20px;
}
</style>