<template>
  <div>
    <ul>
      <!-- <router-link
        @click.native="addActive"
        v-for="baby in babyList"
        :key="baby.id"
        :to="`/gubao/baby/details/${baby.name}/${baby.age}`"
      >
        {{ baby.name }}
      </router-link> -->

      <router-link
        @click.native="addActive"
        v-for="baby in babyList"
        :key="baby.id"
        :to="{
          name: 'Babydetails',
          params: {
            name: baby.name,
            age: baby.age,
          },
        }"
      >
        {{ baby.name }}
      </router-link>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>
  
</template>

<script>
export default {
  name: "GubaoBaby",
  data() {
    return {
      babyList: [
        { id: "001", name: "灰灰", age: "1" },
        { id: "002", name: "药药", age: "1" },
        { id: "003", name: "嘎嘎嘎", age: "0" },
        { id: "004", name: "哇哇哇哇", age: "0" },
      ],
    };
  },
  methods: {
    addActive(e) {
      e.target.className = "active";
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
  margin: 15px 0;
}
ul a {
  text-decoration: none;
  position: relative;
  display: block;
  color: #333;
  font-size: 16px;
  width: 100px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #fff;
  border: 1px solid #333;
  margin-top: -1px;
  cursor: pointer;
}

ul a:hover {
  color: #fff;
  background-color: #666;
}
ul a.active {
  color: #fff;
  background-color: #333;
}
</style>