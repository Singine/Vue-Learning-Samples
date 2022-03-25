<template>
  <div class="rowBox">
    <input
      class="rowCheck"
      type="checkbox"
      :id="babyID"
      name="babyRow"
      :checked="babyStatus"
      @click="getBabyStatus(babyID)"
    />
    <label :for="babyID">{{ babyName }}</label>
    <button type="button" class="deleteBtn" @click="deleteBaby(babyID)">
      不要了
    </button>
  </div>
</template>

<script>
export default {
  name: "Row",
  props: ["babyID", "babyName", "babyStatus", "getBabyStatus", "deleteBaby"],
};
</script>

<style >
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
.deleteBtn {
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
.rowBox:hover .deleteBtn {
  display: inline-block;
}
.deleteBtn:hover{
  color: rgb(243, 91, 91);
  border-color: rgb(243, 91, 91);
}
</style>