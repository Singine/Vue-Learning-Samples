//该文件用于创建VueX中核心的store
//引入Vue
import Vue from 'vue'
//引入VueX
import Vuex from "vuex";

Vue.use(Vuex)

//准备actions 用于响应组件中的动作
const actions = {
  add(context, data) {
    context.commit('ADD', data)
  },
  minus(context, data) {
    context.commit('MINUS', data)
  },
  addOdd(context, data) {
    if (context.state.sum % 2) {
      context.commit('ADD', data)
    }
  },
  addWait(context, data) {
    setTimeout(() => {
      context.commit('ADD', data)
    }, 500)
  }
}

//mutations 用于操作数据
const mutations = {
  ADD(state, data) {
    state.sum += data
  },
  MINUS(state, data) {
    state.sum -= data
  }
}

//state 用于存储数据
const state = {
  sum: 0,
}



//创建并导出暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state
})
