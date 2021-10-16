//用户相关的api

import request from '@/utils/request.js';

//登录
//url 地址：http://www.yinruifang.cn/index/Api/login
export function Login(data) {
    return request({
        url: "login",
        method: "post",
        data: data
    })
}