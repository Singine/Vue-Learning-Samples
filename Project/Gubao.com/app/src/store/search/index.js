//Search store
import { reqGetSearchInfo } from '@/api';


const state = {
    searchList:{}
}
const mutations = {
    GETSEARCHLIST(state,data){
        state.searchList = data
    }
}
const actions = {
    async getSearchList({commit},params={}){
         let result = await reqGetSearchInfo(params)
         console.log(result);
         if (result.code == 200) {
             commit('GETSEARCHLIST',result.data)
         }
    }
}
const getters = {}


export default {
    state,
    mutations,
    actions,
    getters
}