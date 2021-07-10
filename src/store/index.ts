import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state () {
        return {
            sidebar: true
        }
    }
})

export default store;