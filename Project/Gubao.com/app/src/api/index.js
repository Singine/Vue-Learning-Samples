/**
 * index.js
 * E:\Project\GIT\Vue-Learning-Samples\Project\Gubao.com\app\src\api
 * ------------------------------------------------------------------
 * @Author: DZH
 * @Date: 2022/04/11 14:09:51
 * @Description: 所有的api接口进行统一管理
 * ------------------------------------------------------------------
 */


import requests from "./request";

// 三级联动接口
// GET api/product/getBaseCategoryList



export const reqCategoryList = ()=>{
    // 返回的是Promise对象
    return requests({
        url:'product/getBaseCategoryList',
        method:'GET'
    })
}