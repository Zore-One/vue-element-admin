// vuex store 用户信息处理的子树
import md5 from 'js-md5';
//import { setCookie, getCookie } from '@/utils/support';
//引入 登录的接口
import { Login } from '@/api/user.js';
import { getCookie, setCookie, removeCookie } from '../../utils/support';

//定义子树
const user = {
    state: {
        name: getCookie('name') || "",//登录后的中文名字
        roleid: getCookie('roleid') || "" //登录后的角色id  ，1 超级管理员  ，2 普通用户
    },
    mutations: {
        //设置中文名
        SET_NAME: (state, name) => {
            state.name = name;
        },
        //设置用户id
        SET_ROLEID: (state, roleid) => {
            state.roleid = roleid;
        }
    },
    actions: {
        //登录操作
        //userInfo 包括  用户名和密码
        LOGIN_AC: ({ commit }, userInfo) => {
            return new Promise((resolve) => {
                console.log(commit);
                // console.log(userInfo);
                //解构
                const { username, password } = userInfo;
                console.log(username);
                //将密码做加密处理
                //加盐加密
                console.log(md5(password + md5(password).substr(10, 10) + 2014));
                userInfo.password = md5(password + md5(password).substr(10, 10) + 2014);
                //调用后台接口  用户名 ：admin  密码：123456
                Login(userInfo).then(res => {
                    console.log(res);
                    //登录成功后将 登录的数据和 token 保存到 缓存中
                    setCookie("token", res["token"], 1);
                    setCookie("name", res["name"], 1);
                    setCookie("roleid", res["roleid"], 1);
                    setCookie("username", res["username"], 1);

                    //设置 store
                    commit("SET_NAME", res['name']);
                    commit("SET_ROLEID", res['roleid']);
                    //如果 有正确的返回值  ，使用  resolve带回
                    resolve(res);
                })
            })
        },

        //退出操作
        LOGOUT_AC: ({ commit }) => {
            //设置 store
            commit("SET_NAME", "");
            commit("SET_ROLEID", "");

            //清除 cookie
            removeCookie("token");
            removeCookie("name");
            removeCookie("roleid");
            removeCookie("username");
        }
    }
}
export default user;