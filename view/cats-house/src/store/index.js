import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js'
import base from './modules/base'
import user from './modules/user'  //用户类状态（包括登录）

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        base,
        user
    },
    getters
})

export default store