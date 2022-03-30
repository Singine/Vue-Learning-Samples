<template>
  <div>
    <ul>
      <li v-for="pet in petList" :key="pet.id">
        <router-link
          @click.native="addActive"
          :to="{
            name: 'DetailsPet',
            query: {
              name: pet.name,
              msg: pet.msg,
            },
          }"
        >
          {{ pet.name }}
        </router-link>
        <button
          class="firstBtn"
          @click="
            addActive;
            pushShow(pet);
          "
        >
          push
        </button>
        <button
          @click="
            addActive;
            replaceShow(pet);
          "
        >
          replace
        </button>
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "GubaoPet",
  data() {
    return {
      petList: [
        { id: "001", name: "嘿嘿", msg: "是一个好好黑脸猫猫" },
        { id: "002", name: "边边", msg: "是一个聪明大乖狗狗" },
        { id: "003", name: "獭獭", msg: "是一个可爱的胖獭獭" },
        { id: "004", name: "龟龟", msg: "是一个活很久的龟龟" },
      ],
    };
  },
  methods: {
    addActive(e) {
      // console.log(e.target)
      // e.target.className = "active";
      e.target.classList.add("active");
    },
    pushShow(pet) {
      this.$router.push({
        name: "DetailsPet",
        query: {
          name: pet.name,
          msg: pet.msg,
        },
      });
    },
    replaceShow(pet) {
      this.$router.replace({
        name: "DetailsPet",
        query: {
          name: pet.name,
          msg: pet.msg,
        },
      });
    },
  },
};
</script>

<style scoped>
ul {
  padding: 0;
  list-style: none;
}
ul li {
  margin-top: -3px;
}
ul a {
  font-size: 16px;
  width: 100px;
  height: 40px;
  text-decoration: none;
  position: relative;
  display: inline-block;
  color: #333;
  text-align: center;
  line-height: 40px;
  background-color: #fff;
  border: 1px solid #333;
  cursor: pointer;
  box-sizing: border-box;
}

ul a:hover {
  color: #fff;
  background-color: #666;
}

ul a.active {
  color: #fff;
  background-color: #333;
}

li button.firstBtn {
  margin-left: 15px;
}
button {
  position: relative;
  display: inline-block;
  outline: none;
  background-color: #fff;
  border: 1px solid #333;
  color: #333;
  margin-left: -1px;
  width: 100px;
  height: 40px;
  line-height: 40px;
  padding: 0;
  cursor: pointer;
  box-sizing: border-box;
}
button:hover {
  background-color: #333;
  color: #fff;
}

button.active {
  color: #fff;
  background-color: #333;
}
</style>