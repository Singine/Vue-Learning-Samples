<template>
  <div class="componentBox">
    <Input @getNewBaby="getNewBaby" />
    <List
      :babyArr="babyList"
      :getBabyStatus="getBabyStatus"
      :deleteBaby="deleteBaby"
    />
    <Button
      :babyArr="babyList"
      @getCheckAll="getCheckAll"
      @deleteCheckedAll="deleteCheckedAll"
    />
  </div>
</template>

<script>
import Button from "./components/Button";
import Input from "./components/Input";
import List from "./components/List";

import pubsub from "pubsub-js";

export default {
  name: "App",
  components: {
    Button,
    Input,
    List,
  },
  data() {
    return {
      babyList: JSON.parse(localStorage.getItem("babyList")) || [],
    };
  },
  methods: {
    getNewBaby(data) {
      this.babyList.unshift(data);
    },
    getBabyStatus(id) {
      this.babyList.forEach((baby) => {
        if (baby.id === id) {
          baby.status = !baby.status;
        }
      });
    },
    deleteBaby(_,id) {
      if (confirm("不要宝宝了嘛...")) {
        this.babyList.forEach((baby, index) => {
          if (baby.id === id) {
            this.babyList.splice(index, 1);
          }
        });
      }
    },
    updateBabyName(id,newValue){
      this.babyList.forEach((baby)=>{
        if(baby.id === id){
          baby.name = newValue
        }
      })
    },
    getCheckAll(status) {
      this.babyList.forEach((baby) => {
        baby.status = status;
      });
    },
    deleteCheckedAll() {
      this.babyList = this.babyList.filter((baby) => {
        return !baby.status;
      });
    },
    
  },
  watch: {
    babyList: {
      deep: true,
      handler(value) {
        localStorage.setItem("babyList", JSON.stringify(value));
      },
    },
  },
  mounted() {
    this.$bus.$on("getBabyStatus", this.getBabyStatus);
    this.$bus.$on("updateBabyName", this.updateBabyName);

    this.pubid = pubsub.subscribe("deleteBaby",this.deleteBaby);
  },
  beforeDestroy() {
    this.$bus.$off("getBabyStatus");
    
    pubsub.unsubscribe(this.pubid)

  },
};
</script>

<style>
.componentBox {
  position: relative;
  width: 500px;
  min-height: auto;
  margin: 100px auto;
  border: 1px dashed #333;
  border-radius: 10px;
}
</style>
