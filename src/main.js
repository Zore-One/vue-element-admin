import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入 element ui框架
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//引入小图标
import "./assets/fonts/iconfont.css";
//引入图表
import * as echarts from 'echarts';

//引入 路由守卫
import "./permission.js";

//将echarts添加到 vue的扩展属性里
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false

Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
