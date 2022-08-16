import axios from "axios";
export default {
    namespaced: true,
    state: {
        infoTorneo: null
    },
    getters: {
    },
    mutations: {
        setInfoTorneo(state, infoTorneo) {
            state.infoTorneo = infoTorneo;
        },
    },
    actions: {
        async setInfoTorneo({commit}, categoria) {
            const año = new Date().getFullYear();
            await axios
            .get(`${process.env.VUE_APP_URL_API}/info-torneo/${año}/${categoria}`)
            .then(response => {
                if (response.status == 200)
                    commit("setInfoTorneo", response.data);
                else
                    alert("Error inesperado!");
            });
        },
    }
}
