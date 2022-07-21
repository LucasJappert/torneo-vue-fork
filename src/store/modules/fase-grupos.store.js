import axios from "axios";
export default {
    namespaced: true,
    state: {
        infoGrupos: {},
    },
    getters: {
    },
    mutations: {
        setearInfoGrupos(state, infoGrupos) {
            state.infoGrupos = infoGrupos;
        },
        actualizarGrupo(state, grupoEditado){
            let indexGrupoActual = state.infoGrupos.arrayGrupos.findIndex(item => item.id == grupoEditado.id);
            if(indexGrupoActual > -1){
                //let copiaGrupoEditado = {...grupoEditado};//Copiándolo de esta manera no funciona realmente como una copia.
                let copiaGrupoEditado = JSON.parse(JSON.stringify(grupoEditado));
                state.infoGrupos.arrayGrupos[indexGrupoActual].equipos = copiaGrupoEditado.equipos;
            }
        },
        mostrarPartidos(){}
    },
    actions: {
        async setearInfoGrupos({commit}, categoria) {
            const año = new Date().getFullYear();
            await axios
            .get(`${process.env.VUE_APP_URL_API}/fase-grupos/${año}/${categoria}`)
            .then(response => {
                if (response.status == 200){
                    commit("setearInfoGrupos", response.data);
                }
                else{
                    alert("Error inesperado!");
                }
            });
        },
        async actualizarGrupo(context, grupoEditado){
            context.commit("actualizarGrupo", grupoEditado);

            const año = new Date().getFullYear();
            const categoria = context.state.infoGrupos.categoria;
            await axios
            .put(`${process.env.VUE_APP_URL_API}/fase-grupos/${año}/${categoria}`, context.state.infoGrupos)
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.log(`No se puedo actualizar el archivo en el servidor: ${error}`);
            });
        },
       
    }
}