import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        gPassword:"",
        sPassword:"",
        rPassword:"",
        hPassword:"",
        house:"",
        id:""
    },
    getters:{
        gPassword:state=>state.gPassword,
        sPassword:state=>state.sPassword,
        rPassword:state=>state.rPassword,
        hPassword:state=>state.hPassword,
        house:state=>state.house,
        id:state=>state.id
    },
    mutations:{
        setg(state,data){
            state.gPassword=data
        },
        sets(state,data){
            state.sPassword=data
        },
        setr(state,data){
            state.rPassword=data
        },
        seth(state,data){
            state.hPassword=data
        },
        setHouse(state,data){
            state.house=data
        }
    },
    actions:{
        setg({commit},data){
            commit('setg',data)
        },
        sets({commit},data){
            commit('sets',data)
        },
        setr({commit},data){
            commit('setr',data)
        },
        seth({commit},data){
            commit('seth',data)
        },
        setHouse({commit},data){
            commit('setHouse',data)
        }
    }
})

export default store;