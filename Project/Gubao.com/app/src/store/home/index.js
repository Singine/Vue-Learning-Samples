//Home store

import { reqCategoryList, reqBannerList, reqFloorList } from '@/api';

const state = {
    categoryList: [],
    bannerList: [],
    floorList:[]
}
const mutations = {
    CATEGORYLIST(state, data) {
        state.categoryList = data
    },
    BANNERLIST(state, data) {
        state.bannerList = data
    },
    FLOORLIST(state, data) {
        state.floorList = data
    }
}
const actions = {
    async categoryList({ commit }) {
        let result = await reqCategoryList()
        if (result.code == 200) {
            commit('CATEGORYLIST', result.data)
        }
    },

    async getBannerList({ commit }) {
        let result = await reqBannerList()
        console.log(result);
        if (result.code == 200) {
            commit('BANNERLIST', result.data)
        }
    },
    async getFloorList({ commit }) {
        let result = await reqFloorList()
        console.log(result);
        if (result.code == 200) {
            commit('FLOORLIST', result.data)
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