//该文件用于创建VueX中核心的store
//引入Vue
import Vue from 'vue'
//引入VueX
import Vuex from 'vuex';
import Baby from './Baby';
Vue.use(Vuex)



//创建并导出暴露store
export default new Vuex.Store({
  modules: {
    Baby
  }
})
