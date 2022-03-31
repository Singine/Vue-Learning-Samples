<template>
  <div class="rowBox">
    <input
      class="rowCheck"
      type="checkbox"
      :id="baby.id"
      name="babyRow"
      :checked="baby.status"
      @click="handleGetBabyStatus(baby.id)"
    />
    <label :for="baby.id" v-if="!baby.isEdit">{{ baby.name }}</label>
    <input
      type="text"
      onfocus="this.select()"
      class="rowEdit"
      v-if="baby.isEdit"
      :value="baby.name"
      @blur="updateNewValue(baby, $event)"
      @keyup.enter="updateNewValue(baby, $event)"
      ref="newEditInput"
    />
    <button
      v-show="!baby.isEdit"
      type="button"
      class="btn deleteBtn"
      @click="handleDeleteBaby(baby.id)"
    >
      不要了
    </button>
    <button
      v-show="!baby.isEdit"
      type="button"
      class="btn editBtn"
      @click="handleEditBaby(baby)"
    >
      改改
    </button>
  </div>
</template>

<script>
import pubsub from "pubsub-js";

export default {
  name: "Row",
  props: ["baby"],
  methods: {
    handleGetBabyStatus(id) {
      this.$bus.$emit("getBabyStatus", id);
    },
    handleDeleteBaby(id) {
      pubsub.publish("deleteBaby", id);
    },
    handleEditBaby(baby) {
      if (baby.hasOwnProperty("isEdit")) {
        baby.isEdit = true;
      } else {
        this.$set(baby, "isEdit", true);
      }
      // setTimeout(() => {
      //   this.$refs.newEditInput.focus();
      // }, 10);
      this.$nextTick(function () {
        this.$refs.newEditInput.focus();
      });
    },
    updateNewValue(baby, e) {
      baby.isEdit = false;
      if (e.target.value.trim()) {
        this.$bus.$emit("updateBabyName", baby.id, e.target.value);
      } else {
        alert("宝宝不能没有名字！");
      }
    },
  },
};
</script>

<style >
input.rowEdit {
  position: absolute;
  display: inline-block;
  margin: 0;
  padding: 3px;
  top: 2px;
  left: 29px;
  border: 1px dashed rgb(0 0 0 / 45%);
  outline: none;
  width: auto;
  height: 19px;
  font-size: 16px;
}
input.rowCheck {
  position: relative;
  display: inline-block;
  margin: 0 10px 0 10px;
}

input.rowCheck:checked::after {
  content: "✓";
  color: #fff;
  font-size: 12px;
  line-height: 16px;
  font-weight: bold;
  padding: 0px 2px 0px 4px;
  background-color: #333;
  border-radius: 3px;
  top: -2px;
  left: -1px;
  position: absolute;
}

label {
  display: inline-block;
}
.btn {
  display: none;
  position: relative;
  float: right;
  width: 60px;
  height: 25px;
  background-color: transparent;
  margin-right: 15px;
  color: #333;
  cursor: pointer;
  border: 1px solid;
  border-color: #333;
}
.rowBox:hover .btn {
  display: inline-block;
}
.deleteBtn:hover {
  background-color: rgb(243, 91, 91);
  color: #fff;
  border-color: rgb(243, 91, 91);
}
.editBtn:hover {
  background-color: #333;
  color: #fff;
  border-color: #333;
}
</style>