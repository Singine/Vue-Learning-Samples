<template>
  <div class="listBox">
    <Row
      v-for="baby in babyArr"
      :key="baby.id"
      :getBabyStatus="getBabyStatus"
      :babyID="baby.id"
      :babyName="baby.name"
      :babyStatus="baby.status"
      :deleteBaby="deleteBaby"
    />
  </div>
</template>

<script>
import Row from "./Row";
export default {
  name: "List",
  components: {
    Row,
  },
  props: ["babyArr", "getBabyStatus", "deleteBaby"],
};
</script>

<style scoped>
.listBox {
  position: relative;
  display: block;
  width: 462px;
  min-height: 40px;
  margin: 0 auto;
  border: 1px solid #333;
  border-top: 0;
  padding: 10px 0;
}
.rowBox {
  position: relative;
  width: 100%;
  height: 25px;
  padding: 5px 0;
}
</style>