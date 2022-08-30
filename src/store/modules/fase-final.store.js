import FaseFinalServices from "../../services/fase-final.services";


const getDefaultState = () => {
    return {
        faseFinal: null
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
        setearFaseFinal(state, faseFinal) {
            console.log("faseFinal actualizadas!");
            state.faseFinal = faseFinal;
        },
    },
    actions: {
        resetState({commit}){
            commit("resetState");
        },
        async setearFaseFinal({commit}) {
            const result = await FaseFinalServices.GetAll();
            if(result)
                commit("setearFaseFinal", result);
            else
                console.log("Error inesperado!");

        }
    }
}
