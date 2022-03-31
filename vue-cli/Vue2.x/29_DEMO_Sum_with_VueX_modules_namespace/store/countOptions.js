export default {

    //求和功能相关配置

    namespaced:true,
    actions: {
      addOdd(context, data) {
        if (context.state.sum % 2) {
          context.commit('ADD', data)
        }
      },
      addWait(context, data) {
        setTimeout(() => {
          context.commit('ADD', data)
        }, 500)
      },
    },
    mutations: {
      ADD(state, data) {
        state.sum += data
      },
      MINUS(state, data) {
        state.sum -= data
      },
    },
    state: {
      sum: 0,
      name: '咕宝',
      action: '啵啵',
    },
    getters: {
      newSum(state) {
        return state.sum * 10
      }
    },
  }