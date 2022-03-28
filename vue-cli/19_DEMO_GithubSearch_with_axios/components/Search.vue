<template>
  <div class="inputBox">
    <input
      type="text"
      placeholder="请输入用户名..."
      v-model="keyword"
      @keyup.enter="goSearch"
      ref="searchInput"
    />
    <button @click="goSearch">搜索</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    goSearch() {
      this.$bus.$emit("getResult", {
        isInit: false,
        isLoading: true,
        isNotFound: false,
        errMsg: "",
        result: [],
      });
      axios.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
        (response) => {
          console.log(200, response.data);
          this.$bus.$emit("getResult", {
            isInit: false,
            isLoading: false,
            isNotFound: false,
            errMsg: "",
            result: response.data.items,
          });
        },
        (error) => {
          console.log("failed", error.message);
          this.$bus.$emit("getResult", {
            isInit: false,
            isLoading: false,
            isNotFound: false,
            errMsg: error.message,
            result: [],
          });
        }
      );
    },
  },
  mounted(){
    this.$refs.searchInput.focus()
  }
};
</script>

<style scoped>
.inputBox {
  position: relative;
  width: 500px;
}
.inputBox input {
  position: relative;
  display: inline-block;
  width: 431px;
  height: 30px;
  margin: 20px auto 0 auto;
  padding-left: 10px;
  border: 1px solid #333;
}
.inputBox input:focus {
  outline: none;
}
.inputBox input:hover {
  outline: none;
}
.inputBox button {
  position: absolute;
  background-color: #fff;
  outline: none;
  border: 1px solid #333;
  width: 60px;
  height: 34px;
  top: 20px;
  right: -4px;
  cursor: pointer;
}
.inputBox button:hover {
  color: #fff;
  background-color: #333;
}
</style>