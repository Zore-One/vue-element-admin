import Vue from 'vue'
import Vuex from 'vuex'
//引入子树
import app from './modules/app';
import user from './modules/user';
Vue.use(Vuex)

export default new Vuex.Store({
  getters: {//state的派生状态
    sidebar: (state) => state.app.sidebar,
    name: (state) => state.user.name,
    roleid: (state) => state.user.roleid
  },
  modules: {
    //注册子树
    app,
    user
  }
})
