<template>
  <div class="text-color">
    <h1>{{ name }}</h1>
    <h2>{{ age }}</h2>
    <button @click="updateHuihuiName">点点获取灰灰名字</button>
    <br />
    <br />
    <button @click="unbindEvent">解绑自定义事件</button>
    <br />
    <hr>
    
    <br />

    <button @click="byeHui">销毁灰灰VC</button>
  </div>
</template>

<script>
export default {
  name: "Baby",
  data() {
    return {
      name: "Huihui",
      age: 1,
    };
  },
  methods: {
    updateHuihuiName() {
      //触发Baby组件实例上的getName自定义事件
      this.$emit("getName", this.name, 111, 222, 333, 444, 555);
    },
    unbindEvent() {
      // this.$off()  //解绑所有自定义事件
      this.$off("getName")    //解绑一个指定的自定义事件
      // this.$off(["getName", "getName2"]); //解绑多个自定义事件 放在数组里
    },
    byeHui(){
      this.$destroy()
    }
  },
};
</script>

<style scoped>
.text-color {
  color: cornflowerblue;
}
</style>

