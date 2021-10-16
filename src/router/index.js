import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { title: "首页" },
    component: Layout,
    redirect: "/home",
    children: [
      { path: "home", meta: { title: "首页" }, name: "myhome", component: () => import(/* webpackChunkName: "home" */ '../views/home/index.vue') },
      { path: "super", meta: { title: "管理员页面" }, name: "super", component: () => import(/* webpackChunkName: "super" */ '../views/super/index.vue') },
    ]
  },
  {
    path: '/pms',
    name: 'pms',
    meta: { title: "商品" },
    component: Layout,
    redirect: "/pms/product",
    children: [
      { path: "product", name: "product", meta: { title: "商品列表" }, component: () => import(/* webpackChunkName: "product" */ '../views/pms/product/index.vue') },
      { path: "productadd", name: "productadd", meta: { title: "添加商品" }, component: () => import(/* webpackChunkName: "productadd" */ '../views/pms/product/add.vue') },
      { path: "productupdate/:id", name: "productupdate", meta: { title: "修改商品" }, component: () => import(/* webpackChunkName: "productupdate" */ '../views/pms/product/update.vue') },
      { path: "productCate", name: "productCate", meta: { title: "商品分类列表" }, component: () => import(/* webpackChunkName: "productCate" */ '../views/pms/productCate/index.vue') },
      { path: "productCateAdd", name: "productCateAdd", meta: { title: "添加商品分类" }, component: () => import(/* webpackChunkName: "productCateAdd" */ '../views/pms/productCate/add.vue') },
      { path: "productAttr", name: "productAttr", meta: { title: "商品类型列表" }, component: () => import(/* webpackChunkName: "productAttr" */ '../views/pms/productAttr/index.vue') },
      { path: "productAttrUpdate/:id/:name", name: "productAttrUpdate", meta: { title: "修改商品类型" }, component: () => import(/* webpackChunkName: "productAttrUpdate" */ '../views/pms/productAttr/update.vue') },
      { path: "brand", name: "brand", meta: { title: "商品品牌列表" }, component: () => import(/* webpackChunkName: "brand" */ '../views/pms/brand/index.vue') },
    ]
  },


  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/index.vue')
  },
  {
    path: '*',
    component: () => import(/* webpackChunkName: "page404" */ '../views/page404/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
