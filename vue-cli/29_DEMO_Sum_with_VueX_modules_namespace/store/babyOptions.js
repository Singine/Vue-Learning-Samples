import { nanoid } from 'nanoid';
import axios from 'axios';
export default {

  //Baby功能相关配置

  namespaced: true,
  actions: {
    addBaby(context, data) {
      const baby = {
        id: nanoid(),
        name: data,
      };
      context.commit('ADD_BABY', baby)
    },
    getNewNameFromServer(context, data) {
      axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
        (response) => {
          context.state.msg = response.data
        },
        (error) => {
          context.state.msg = error
        },
      )
    }
  },
  mutations: {
    ADD_BABY(state, data) {
      state.babyList.unshift(data)
    }
  },
  state: {
    babyList: [
      { id: '001', name: '灰灰' }
    ],
    msg:''
  },
  getters: {
    getFirstBaby(state) {
      return state.babyList[0].name
    }
  }
}