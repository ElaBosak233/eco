import { Module } from "vuex";

interface StoreUser {
    text: string
}

const store: Module<StoreUser, unknown> = {
    namespaced: true,
    state() {
        return {
            text: "未修改"
        }
    },
    mutations: {
        setText(state: StoreUser, payload: any) {
            state.text = payload.text;
        }
    },
    actions: {
        setText(context, payload: any) {
            context.commit("setText", payload);
        }
    },
    getters: {
        getText(state: StoreUser) {
            return state.text
        }
    }
}

export default store;