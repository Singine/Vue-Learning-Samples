<template>
  <div class="content">
    <h2>Home page</h2>
    <h3 :style="{ opacity }">Gubao BOBO!</h3>
    <input
      ref="homeInput"
      type="text"
      @keyup.enter="setKeycode"
      v-model="keycode"
      :class="passState"
    />
    <button v-show="hasKey" @click="deleteKeycode">清除记录</button>
  </div>
</template>

<script>
export default {
  name: "Content",
  data() {
    return {
      opacity: 1,
      keycode: "",
      hasKey: false,
      passState: [],
    };
  },
  methods: {
    setKeycode() {
      localStorage.setItem("keycode", this.keycode);
      if (this.keycode === "Haishigugue33") {
        this.passState = ["passed"];
      } else {
        this.passState = [];
      }
      this.keycode = "";
      this.hasKey = true;
      this.$refs.homeInput.setAttribute("disabled", "disabled");
    },
    deleteKeycode() {
      localStorage.removeItem("keycode");
      this.hasKey = false;
      this.$refs.homeInput.removeAttribute("disabled");
    },
  },
  watch: {
    hasKey(n) {},
  },
  mounted() {
    if (localStorage.getItem("keycode")) {
      this.$refs.homeInput.setAttribute("disabled", "disabled");
      this.hasKey = true;
      if (localStorage.getItem("keycode") === "Haishigugue33") {
        this.passState = ["passed"];
      }
    }
  },
  activated() {
    this.$refs.homeInput.focus();
    this.timer = setInterval(() => {
      console.log("@");
      this.opacity -= 0.01;
      if (this.opacity <= 0) {
        this.opacity = 1;
      }
    }, 10);
  },
  deactivated() {
    clearInterval(this.timer);
  },

  //通过路由规则进入该组件时被调用
  beforeRouteEnter(to, from, next) {
    console.log("独享路由守卫---进入");
    next();
  },

  //通过路由规则离开该组件前被调用
  beforeRouteLeave(to, from, next) {
    console.log("独享路由守卫---离开");
    next();
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
input {
  width: 200px;
  height: 30px;
  border: 1px solid #333;
  padding: 5px 10px;
}
input:focus {
  outline: none;
}
input:disabled {
  background-color: rgba(255, 163, 163, 0.2);
  cursor: not-allowed;
}

input.passed:disabled {
  background-color: rgba(120, 255, 66, 0.2);
}

button {
  position: relative;
  display: inline-block;
  outline: none;
  background-color: #fff;
  border: 1px solid #333;
  color: #333;
  width: 100px;
  height: 40px;
  line-height: 40px;
  padding: 0;
  cursor: pointer;
  margin-left: -1px;
  box-sizing: content-box;
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