<template>
  <div class="buttonBox">
    <input
      class="allCheck"
      type="checkbox"
      id="allCheck"
      name="allCheck"
      v-model="isAll"
    />
    <span> 已选 {{ getBabyStatusChecked }}/{{ getBabyLength }}</span>
    <button @click="deleteAll">都不要了</button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: ["babyArr", "getCheckAll", "deleteCheckedAll"],
  computed: {
    getBabyStatusChecked() {
      return this.babyArr.reduce((pre, current) => {
        return pre + (current.status ? 1 : 0);
      }, 0);
    },
    getBabyLength() {
      return this.babyArr.length;
    },
    isAll: {
      get() {
        return (
          this.getBabyStatusChecked === this.getBabyLength &&
          this.getBabyLength > 0
        );
      },
      set(value) {
        this.getCheckAll(value);
      },
    },
  },
  methods: {
    deleteAll() {
      if(confirm("真的都不要了嘛...")) this.deleteCheckedAll();
      
    },
  },
};
</script>

<style scoped>
.buttonBox {
  position: relative;
  display: block;
  width: 462px;
  height: 25px;
  margin: 0 auto 20px auto;
  padding: 20px 0 10px 0;
}
button {
  width: 80px;
  height: 35px;
  color: #24292f;
  background-color: #ffffff;
  border: 1px solid;
  border-color: #333;
  float: right;
  margin-top: -5px;
  cursor: pointer;
  text-align: center;
}
button:hover {
  color: rgb(243, 91, 91);
  border-color: rgb(243, 91, 91);
}
input:checked::after {
  content: "✓";
  color: #fff;
  font-size: 12px;
  line-height: 16px;
  font-weight: bold;
  padding: 0px 2px 0px 4px;
  background-color: #333;
  border-radius: 3px;
  top: 23px;
  left: 3px;
  position: absolute;
}
</style>