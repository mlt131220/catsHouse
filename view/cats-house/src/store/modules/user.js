const state = {
    token:localStorage.getItem('token') ? localStorage.getItem('token'):'',
}

const mutations = {
    setToken(state, value) { // 设置存储token
        state.token = value;
        localStorage.setItem('token', value);
    },
    removeStorage(state, value){  // 删除token
        state.token = "";
        localStorage.removeItem('token');
    }
}

const actions = {
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}