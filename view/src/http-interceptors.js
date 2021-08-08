import axios from "axios";
import store from "./store";
import router from "./router";

// 拦截axios所有http请求，预先放入token请求头
axios.interceptors.request.use(config => {
    if (store.state.token) {
        // 若存在token，则放入请求头
        config.headers.token = store.state.token;
    }
    return config;
});

// 响应拦截器，提前预处理响应
axios.interceptors.response.use(
    response => {
        // 如果code是-1，说明用户已注销或者token已过期
        // 此时需要重新登录，并且还要清除本地缓存信息和store数据
        if (response.status === 200) {
            const data = response.data;
            if (data.code === -1) {
                logoutFun();
            }
        }
        return response;
    },
    err => {
        if (err.response.status === 401) { // 未授权
            logoutFun();
        }
    }
);

function logoutFun() {
    // 清空本地缓存的token和store里的token
    store.commit("setToken", "");
    localStorage.removeItem("token");
    // 跳转至登录页，并携带用户退出时或token失效时的页面路由，方便登录后直接跳转到此页面。
    router.push({
        path: "/login",
        query: {
            redirect: router.currentRoute.path
        }
    });
}
