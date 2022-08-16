import axios from "axios";
export default {
    namespaced: true,
    state: {
        equipos: null
    },
    getters: {
    },
    mutations: {
        setEquipos(state, equipos) {
            state.equipos = equipos;
        },
    },
    actions: {
        async setEquipos({commit}) {
            const año = new Date().getFullYear();
            await axios
            .get(`${process.env.VUE_APP_URL_API}/equipos/${año}`)
            .then(response => {
                if (response.status == 200)
                    commit("setEquipos", response.data);
                else
                    alert("Error inesperado!");
            });
        },

    }
}
