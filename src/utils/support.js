//封装了cookie
import Cookie from 'js-cookie';

//创建cookie
//key  键  value 值   expires 过期时间 
export function setCookie(key, value, expires) {
    return Cookie.set(key, value, { expires: expires })
}

//获取 cookie
export function getCookie(key) {
    return Cookie.get(key);
}
//删除cookie

export function removeCookie(key) {
    return Cookie.remove(key);
}