//路由守卫
//引入 路由
import router from './router';
//引入 cookie
import { getCookie } from '@/utils/support.js';
import { Message } from 'element-ui';
import store from './store';

//守卫
/*
beforeEach 里面是一个函数 ，这个函数中有三个参数  to  from   next
*/

/*
登录页不需要守卫，
如果没有登录 ，跳转 登录页
如果已经登录 ，放行
*/

//不需要守卫的页面白名单
const whiteList = ['/login'];
router.beforeEach((to, from, next) => {
    console.log(to, from);
    //判断是否登录，可以使用 token进行判断
    if (getCookie("token")) {//登录了
        if (to.path == "/login") {
            next("/home");
        } else if (to.path == "/super") {//超级管理员页面
            //判断roleid是否是超级管理员
            if (getCookie('roleid') == 1) {
                next();
            } else {//非超级管理员身份
                //提示没有权限，退出，刷新页面
                Message({
                    message: "您没有权限访问该页面，请退出后使用 超级管理员身份登录",
                    type: "error",
                    duration: 2000
                })
                store.dispatch('LOGOUT_AC');
                router.go(0);
            }
        } else {
            //放行
            next();
        }
    } else {//没登录
        //如果在白名单 放行
        if (whiteList.indexOf(to.path) !== -1) {
            //放行
            next();
        } else {
            //不在白名单 ，跳转到 登录页
            next("/login");
        }
    }
})