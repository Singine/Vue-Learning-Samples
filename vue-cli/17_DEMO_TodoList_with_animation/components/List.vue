<template>
  <div class="listBox">
    <transition-group
      name="animate__animated animate__fadeIn"
      enter-active-class="animate__fadeIn"
      leave-active-class="animate__fadeOut ani"
    >
      <Row v-for="baby in babyArr" :key="baby.id" :baby="baby" />
    </transition-group>
  </div>
</template>

<script>
import "animate.css";
import Row from "./Row";
export default {
  name: "List",
  components: {
    Row,
  },
  props: ["babyArr"],
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