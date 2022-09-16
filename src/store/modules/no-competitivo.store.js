import NoCompetitivoServices from "../../services/no-competitivo.services.js";


const getDefaultState = () => {
    return {
        dataFromServer: [],
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
        setearData(state, dataFromServer) {
            state.dataFromServer = dataFromServer;
        },
    },
    actions: {
        resetState({commit}){
            commit("resetState");
        },
        async setearDataFromServer({commit}) {
            const result = await NoCompetitivoServices.GetAll();
            if(result)
                commit("setearData", result);
            else
                console.log("Error inesperado!");

        },
        setearDataFromResult({commit}, result){
            commit("setearData", result);
        }
    }
}
