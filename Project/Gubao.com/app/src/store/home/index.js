//Home store

import {reqCategoryList,reqBannerList} from '@/api';    

const state = {
    categoryList:[],
    bannerList:[]
}
const mutations = {
    CATEGORYLIST(state,data){
        state.categoryList = data
    },
    BANNERLIST(state,data){
        state.bannerList = data
    }
}
const actions = {
    async categoryList({commit}){
        let result = await reqCategoryList()
        if(result.code == 200){
            commit('CATEGORYLIST',result.data)
        }
    },

    async getBannerList({commit}){
        let result = await reqBannerList()
        console.log(result);
        if(result.code == 200){
            commit('BANNERLIST',result.data)
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