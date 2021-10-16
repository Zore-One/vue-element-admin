//商品相关的api
//引入封装好的axios
/*
规定了 :get   params
        post  data
*/

import request from '@/utils/request.js';
//获取商品列表
export function fetchProductList(params) {
    return request({
        url: "product_list",
        method: "get",
        params: params
    })
}

//获取 商品分类列表
export function fetchProductCateList(params, parent_id) {
    return request({
        url: "get_product_category_list/" + parent_id,//从 后台api里面查找
        method: "get",
        params: params
    })
}


//获取 商品类型列表
//http://www.yinruifang.cn/index/Api/get_product_attr
export function fetchProductAttrList(params) {
    return request({
        url: "get_product_attr",
        method: "get",
        params: params
    })
}

//获取  品牌搜索数据
//3.接口名称：获取品牌列表
//http://www.yinruifang.cn/index/Api/get_product_brand
export function fetchBrand(params) {
    return request({
        url: "get_product_brand",
        method: "get",
        params: params
    })
}

//获取 分类的有子节点的数据
//## 2.接口名称：获取商品分类的所有数据 ，有子节点
//http://www.yinruifang.cn/index/Api/get_product_category
export function fetchCategory(params) {
    return request({
        url: "get_product_category",
        method: "get",
        params: params
    })
}

//添加商品的接口
// 6.接口名称：添加一条商品信息

//url地址：http://www.yinruifang.cn/index/Api/create_product

export function createProduct(data) {
    return request({
        url: "create_product",
        method: "post",
        data: data
    })
}


//添加商品分类接口
//：http://www.yinruifang.cn/index/Api/create_product_cate
export function createProductCate(data) {
    return request({
        url: "create_product_cate",
        method: "post",
        data: data
    })
}


//修改商品信息
//http://www.yinruifang.cn/index/Api/update_product
export function updateProduct(data) {
    return request({
        url: "update_product",
        method: "post",
        data: data
    })
}

//通过id获取一条商品记录
//url 地址：http://www.yinruifang.cn/index/Api/product_one
export function getProductOne(params) {
    return request({
        url: "product_one",
        method: "get",
        params: params
    })
}


//通过 id删除 商品数据
//http://www.yinruifang.cn/index/Api/delete_status
export function delProduct(params) {
    return request({
        url: "delete_status",
        method: "get",
        params: params
    })
}

//修改商品类型
//http://www.yinruifang.cn/index/Api/update_product_attr
export function undateProductAttr(data) {
    return request({
        url: "update_product_attr",
        method: "post",
        data: data
    })
}