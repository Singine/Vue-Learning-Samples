<template>
  <input
    type="text"
    placeholder="Enter baby's name..."
    v-model="newBabyName"
    @keyup.enter="addBaby"
  />
</template>

<script>
import { nanoid } from "nanoid";

export default {
  name: "Input",
  data() {
    return {
      newBabyName: "",
    };
  },
  props: ["getNewBaby"],
  methods: {
    addBaby() {
      if (!this.newBabyName.trim()) {
        alert("宝宝不能是空");
        return;
      }
      console.log(this.newBabyName);
      const newBaby = {
        id: nanoid(),
        name: this.newBabyName,
        status: false,
      };
      this.getNewBaby(newBaby);
      this.newBabyName = "";
    },
  },
};
</script>

<style lang="css" scoped>
input {
  position: relative;
  display: block;
  width: 450px;
  height: 30px;
  margin: 20px auto 0 auto;
  padding-left: 10px;
  border: 1px solid #333;
}
input:focus {
  outline: none;
}
input:hover {
  outline: none;
}
</style>