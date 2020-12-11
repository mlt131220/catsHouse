const state = {
    network:true,
    asideIsCollapse:false,
    screenWidth: document.documentElement.clientWidth
}

const mutations = {
    toggleAside(state){
        state.asideIsCollapse = !state.asideIsCollapse;
    },
    isCollapseBool(state,bool){
        state.asideIsCollapse =bool;
    },
    setScreenWidth(state,sWidth){
        state.screenWidth = sWidth;
    },
    changeNetwork(state,bool){
        state.network =bool;
    }
}

const actions = {
    asideAction({commit}){
        commit('toggleAside');
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}