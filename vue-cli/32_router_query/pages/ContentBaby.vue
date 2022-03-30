<template>
  <div class="content">
    <h2>咕宝的宝宝很好的</h2>
    <h3 v-for="baby in babyList" :key="baby.id">{{ baby.name }}</h3>

    <div class="tabBox">
        <router-link class="tabs" active-class="active" to="/gubao/baby">咕宝的宝宝们</router-link>
        <router-link class="tabs" active-class="active" to="/gubao/pet">咕宝的宠物们</router-link>
    </div>
    <router-view></router-view>
    

  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Content",
  computed: {
    ...mapState("Baby", ["babyList"]),
  },

};
</script>

<style scoped>
.content {
  position: relative;
  width: 100%;
  height: 300px;
  flex: 4;
}
.tabBox{
  position: relative;
  margin: 40px 0;
}
.tabBox .tabs{
  position: relative;
  display: inline-block;
  width: 130px;
  height: 50px;
  line-height: 50px;
  text-align: center;
color: #333;
  background-color: #fff;
  border: 1px solid #333;
  text-decoration: none;
  margin-left: -1px;
  cursor: pointer;
}

.tabBox .tabs:hover {
  color: #fff;
  background-color: #666;
}
.tabBox .tabs.active {
  color: #fff;
  background-color: #333;
}

</style>