<template>
  <div>
    <h2>当前的和为：{{ sum }}</h2>
    <br />
    <select v-model.number="selectVal">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <br />
    <button @click="add">+</button>
    <button @click="minus">-</button>
    <br />
    <button @click="addOdd">奇数再加</button>
    <button @click="addWait">等等再加</button>
  </div>
</template>

<script>
export default {
  name: "Count",
  data() {
    return {
      sum: 0,
      selectVal: 1,
    };
  },
  methods: {
    add() {
      this.sum += this.selectVal
    },
    minus() {
      this.sum -= this.selectVal
    },
    addOdd() {
      if(this.sum % 2){
          this.sum += this.selectVal
      }
    },
    addWait() {
      setTimeout(()=>{
        this.sum += this.selectVal
      },500)
    },
  },
};
</script>

<style scoped>
button {
  margin: 10px 10px 0 0;
}
</style>