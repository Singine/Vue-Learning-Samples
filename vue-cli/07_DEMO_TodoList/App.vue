<template>
  <div class="componentBox">
    <Input :getNewBaby="getNewBaby" />
    <List
      :babyArr="babyList"
      :getBabyStatus="getBabyStatus"
      :deleteBaby="deleteBaby"
    />
    <Button
      :babyArr="babyList"
      :getCheckAll="getCheckAll"
      :deleteCheckedAll="deleteCheckedAll"
    />
  </div>
</template>

<script>
import Button from "./components/Button";
import Input from "./components/Input";
import List from "./components/List";

export default {
  name: "App",
  components: {
    Button,
    Input,
    List,
  },
  data() {
    return {
      babyList: [
        { id: "001", name: "灰灰", status: true },
        { id: "002", name: "药药", status: false },
        { id: "003", name: "嘎嘎嘎", status: false },
        { id: "004", name: "哇哇哇哇", status: false },
      ],
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
    deleteBaby(id) {
      if (confirm("不要宝宝了嘛...")) {
        this.babyList.forEach((baby, index) => {
          if (baby.id === id) {
            this.babyList.splice(index, 1);
          }
        });
      }
    },
    getCheckAll(status){
      this.babyList.forEach((baby)=>{
        baby.status = status
      })
    },
    deleteCheckedAll(){
      this.babyList = this.babyList.filter((baby)=>{
        return !baby.status
      })
    }
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
