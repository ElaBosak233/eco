import { createStore } from "vuex";

const state = {
    sidebar: true,
    token: localStorage.getItem("token") || ""
};

const mutations = {
    setToken(state, token) {
        state.token = token;
    }
};

const actions = {
};

const getters = {
    isLogin(state) {
        return !!state.token;
    }
};

export default createStore({
    state,
    getters,
    actions,
    mutations
});
