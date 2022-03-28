<template>
  <div class="resultBox">
    <span class="msgBox" v-show="listData.isInit">Welcome Gubao!</span>
    <span class="msgBox" v-show="listData.isLoading">Searching...</span>
    <span
      class="msgBox"
      v-show="
        !listData.result.length &&
        !listData.isInit &&
        !listData.isLoading &&
        !listData.errMsg
      "
      >No Result found.</span
    >
    <span class="msgBox" v-show="listData.errMsg">{{ listData.errMsg }}</span>
    <div
      class="resultItem"
      v-show="listData.result.length"
      v-for="user in listData.result"
      :key="user.id"
    >
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" width="100px" />
        <span>{{ user.login }}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Result",
  data() {
    return {
      listData: {
        isInit: true,
        isLoading: false,
        isNotFound: false,
        errMsg: "",
        result: [],
      },
    };
  },
  mounted() {

    


    this.$bus.$on("getResult", (dataObj) => {
      this.listData = dataObj;
    });
  },
  beforeDestroy() {
    this.$bus.$off("startSearch");
    this.$bus.$off("getResult");
  },
};
</script>

<style scoped>
.resultBox {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 800px;
}
a {
  text-decoration: none;
}

.resultItem {
  position: relative;
  width: 100px;
  margin: 50px 50px;
}
.resultItem img,
.resultItem span {
  position: relative;
  display: block;
}
.resultItem span {
  color: #333;

  text-align: center;
  margin-top: 20px;
}

.msgBox {
  flex-grow: 1;
  display: block;
  margin-top: 120px;
  color: #888888a6;
  font-size: 20px;
  font-style: italic;
  text-align: center;
}
</style>