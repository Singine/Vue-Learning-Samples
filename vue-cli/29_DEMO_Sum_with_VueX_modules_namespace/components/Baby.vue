<template>
  <div>
    <h3>{{ sum }}</h3>

    <input
      @keyup.enter="
        addBaby(newName);
        clearInput();
      "
      type="text"
      placeholder="请输入宝宝名..."
      v-model="newName"
    />
    <button
      @click="
        addBaby(newName);
        clearInput();
      "
    >
      添加
    </button>
    
    <br />
    <ul>
      <li v-for="b in babyList" :key="b.id">{{ b.name }}</li>
    </ul>

    <h3>最新的宝宝是 {{ getFirstBaby }}</h3>
    <br>
    <hr>
    <br>
    <button
      @click="
        getNewNameFromServer
      "
    >
      点点宝宝说话
    </button>
    <br>
    <h3>宝宝说话了： {{ msg }}</h3>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
// import { nanoid } from "nanoid";
export default {
  name: "Baby",
  data() {
    return {
      newName: "",
    };
  },
  methods: {
    clearInput() {
      this.newName = '';
    },

    ...mapActions('babyOptions', ['addBaby','getNewNameFromServer']),

    // addBaby() {
    //   const baby = {
    //     id: nanoid(),
    //     name: this.newName,
    //   };
    //   this.$store.commit('babyOptions/ADD_BABY', baby);     //  <====== commit
    // },


  },
  computed: {
    //   babyList(){
    //       return this.$store.state.babyList
    //   },
    ...mapState('babyOptions', ['babyList','msg']),
    ...mapState('countOptions', ['sum']),
    ...mapGetters('babyOptions', ['getFirstBaby']),

    getFirstBaby() {
      return this.$store.getters['babyOptions/getFirstBaby'];
    },
  },
};
</script>

<style>
button {
  margin-left: 10px;
}
</style>