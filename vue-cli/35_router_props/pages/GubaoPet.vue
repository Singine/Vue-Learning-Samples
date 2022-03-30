<template>
  <div>
    <ul>
      <li v-for="pet in petList" :key="pet.id">{{ pet.name }}</li>
    </ul>
    <hr />
  </div>
</template>

<script>
export default {
  name: "GubaoPet",
  data() {
    return {
      petList: [
        { id: "001", name: "嘿嘿" },
        { id: "002", name: "边边" },
        { id: "003", name: "獭獭" },
        { id: "004", name: "龟龟" },
      ],
    };
  },
};
</script>

<style scoped>
ul {
  padding: 0;
  list-style: none;
}
ul li {
  margin: 15px 0;
}
</style>