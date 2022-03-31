<template>
  <div>
    <h2>当前的和为：{{ sum }}</h2>
    <h2>当前的和放大十倍为：{{ newSum }}</h2>
    <h3>我想{{ name }}了</h3>
    <h3>{{ action }}</h3>
    <h3>一共有个{{babyList.length}}宝宝</h3>
    <br />
    <select v-model.number="selectVal">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <br />
    <button @click="ADD(selectVal)">+</button>
    <button @click="MINUS(selectVal)">-</button>
    <br />
    <button @click="addOdd(selectVal)">奇数再加</button>
    <button @click="addWait(selectVal)">等等再加</button>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      selectVal: 1,
    };
  },
  methods: {
    // add() {
    //   // this.$store.dispatch('add',this.selectVal)
    //   this.$store.commit("ADD", this.selectVal);
    // },
    // minus() {
    //   // this.$store.dispatch('minus',this.selectVal)
    //   this.$store.commit("MINUS", this.selectVal);
    // },

    // ...mapMutations({add:'ADD',minus:'MINUS'}),
    ...mapMutations('countOptions',["ADD", "MINUS"]),

    // addOdd() {
    //   this.$store.dispatch("addOdd", this.selectVal);
    // },
    // addWait() {
    //   this.$store.dispatch("addWait", this.selectVal);
    // },

    // ...mapActions({ addOdd: "addOdd", addWait: "addWait" }),
    ...mapActions('countOptions',['addOdd', 'addWait']),
  },
  computed: {
    ...mapState('countOptions',['sum', 'name', 'action']),
    ...mapState('babyOptions',['babyList']),
    ...mapGetters('countOptions',['newSum']),
  },
  mounted() {
    // const a = mapState({ sum: "sum", name: "name", action: "action" });
    // console.log(a);
  },
};
</script>

<style scoped>
button {
  margin: 10px 10px 0 0;
}
</style>