import FaseFinalServices from "../../services/fase-final.services";


const getDefaultState = () => {
    return {
        faseFinal: null,
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
            // console.log("faseFinal actualizadas!", faseFinal);
            state.faseFinal = faseFinal;
        },
    },
    actions: {
        resetState({commit}){
            commit("resetState");
        },
        async setearFaseFinalFromServer({commit}, tipoCopa) {
            const result = await FaseFinalServices.GetAll(tipoCopa);
            if(result)
                commit("setearFaseFinal", result);
            else
                console.log("Error inesperado!");

        },
        setFaseFinalFromResult({commit}, result){
            commit("setearFaseFinal", result);
        }
    }
}
