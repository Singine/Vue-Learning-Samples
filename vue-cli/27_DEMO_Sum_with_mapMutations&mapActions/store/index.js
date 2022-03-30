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
      context.dispatch('demoMiddle_1', data)
    }, 500)
  },
  demoMiddle_1(context, data) {
    context.dispatch('demoMiddle_2', data)
  },
  demoMiddle_2(context, data) {
    context.commit('ADD', data)
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
  name:'咕宝',
  action:'啵啵'
}

//getters 用于对state中的数据进行加工
const getters = {
  newSum(state) {
    return state.sum * 10
  }
}



//创建并导出暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
})
