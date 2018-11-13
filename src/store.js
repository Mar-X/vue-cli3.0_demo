import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        firstNav: {},
        secondNav: {}
    },
    mutations: {
        newFirstNav(state, msg) {
            // console.log(msg)
            window.localStorage.setItem('firstNavStorage', JSON.stringify(msg));
            state.firstNav = msg
        },
        newsecondNav(state, msg) {
            window.localStorage.setItem('secondNavStorage', JSON.stringify(msg));
            state.secondNav = msg
        }
    },
    actions: {

    }
})