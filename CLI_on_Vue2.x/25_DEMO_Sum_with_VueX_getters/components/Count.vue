<template>
  <div>
    <h2>当前的和为：{{ $store.state.sum }}</h2>
    <h2>当前的和放大十倍为：{{ $store.getters.newSum }}</h2>
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
      selectVal: 1,
    };
  },
  methods: {
    add() {
      // this.$store.dispatch('add',this.selectVal)
      this.$store.commit('ADD',this.selectVal)
    },
    minus() {
      // this.$store.dispatch('minus',this.selectVal)
      this.$store.commit('MINUS',this.selectVal)
    },
    addOdd() {
      this.$store.dispatch('addOdd',this.selectVal)
      
    },
    addWait() {
      this.$store.dispatch('addWait',this.selectVal)
      
    },
  },
};
</script>

<style scoped>
button {
  margin: 10px 10px 0 0;
}
</style>