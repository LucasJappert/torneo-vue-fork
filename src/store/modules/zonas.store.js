import axios from "axios";
import ZonasServices from "../../services/zonas.services";


const getDefaultState = () => {
    return {
        infoZonas: null
    }
}

export default {
    namespaced: true,
    state: getDefaultState(),
    getters: {
    },
    mutations: {
        resetState(state){
            Object.assign(state, getDefaultState());
        },
        setearZonas(state, infoZonas) {
            console.log("Zonas actualizadas!");
            state.infoZonas = infoZonas;
        },
    },
    actions: {
        resetState({commit}){
            commit("resetState");
        },
        async setearZonas({commit}) {
            const result = await ZonasServices.GetAll();
            if(result)
                commit("setearZonas", result);
            else
                console.log("Error inesperado!");

        }
    }
}
