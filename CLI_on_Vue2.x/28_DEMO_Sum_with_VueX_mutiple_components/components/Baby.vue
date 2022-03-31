<template>
  <div>
    <h3>{{sum}}</h3>

    <input @keyup.enter="addBaby" type="text" placeholder="请输入宝宝名..." v-model="newName" />
    <button @click="addBaby">添加</button>
    <br />
    <ul>
      <li v-for="b in babyList" :key="b.id">{{ b.name }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { nanoid } from "nanoid";
export default {
  name: "Baby",
  data() {
    return {
      newName: "",
    };
  },
  methods: {
    addBaby() {
      const baby = {
        id: nanoid(),
        name: this.newName,
      };
      this.newName = "";
      this.$store.commit("ADD_BABY", baby);
    },
  },
  computed: {
    //   babyList(){
    //       return this.$store.state.babyList
    //   },
    ...mapState(["babyList", "sum"]),
  },
};
</script>

<style>
button{
    margin-left: 10px;
}
</style>