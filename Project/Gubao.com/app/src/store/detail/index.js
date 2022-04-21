//Search store
import { reqGetDetail } from '@/api';


const state = {
    goodDetail:{}
}
const mutations = {
    GOODDETAIL(state, data) {
        state.goodDetail = data
    },
}
const actions = {
    async goodDetail({ commit },skuid) {
        let result = await reqGetDetail(skuid)
        if (result.code == 200) {
            commit('GOODDETAIL', result.data)
        }
    },
}
const getters = {
    categoryView(state){
        return state.goodDetail.categoryView || {}
    },
    skuInfo(state){
        return state.goodDetail.skuInfo || {}
    },
    spuSaleAttrList(state){
        return state.goodDetail.spuSaleAttrList || []
    },

}


export default {
    state,
    mutations,
    actions,
    getters
}



