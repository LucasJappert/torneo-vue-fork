<template>
    <div>
        <div class="cont-categoria">
            <span class="title">Categoría {{ $route.params.id }}</span>
        </div>

        <div class="container-partidos" v-for="(partidos, index) in getPartidosByDay" :key="index">
            <div class="my-table-content">
                <div class="my-table visible" v-if="partidos.length > 0">
                    <div class="my-table-header resultado-columns bg-t c-222">
                        <div>Fecha y Hora</div>
                        <div>Cancha</div>
                        <div>Local</div>
                        <div>Resultado</div>
                        <div>Visitante</div>
                        <div>Estado</div>
                    </div>
                    <div class="my-table-item resultado-columns" v-for="partido in partidos">
                        <div v-if="modoEdicion && partido.Estado == 0">
                            <input class="input-general" type="text" v-model="partido.Fecha" />
                        </div>
                        <div v-else>{{partido.Fecha}}</div>
                        <div v-if="modoEdicion && partido.Estado == 0">
                            <input class="input-general" type="text" v-model="partido.Cancha" />
                        </div>
                        <div v-else>{{partido.Cancha}}</div>
                        <div>{{partido.NombreEquipo1}}</div>
                        <div v-if="modoEdicion && partido.Estado == 0">
                            <input class="input-goles" type="number" v-model="partido.GolesEquipo1" />
                            -
                            <input class="input-goles" type="number" v-model="partido.GolesEquipo2" />
                        </div>
                        <div v-else class="B">{{partido.GolesEquipo1}} - {{partido.GolesEquipo2}}</div>
                        <div>{{partido.NombreEquipo2}}</div>
                        <div>
                            <span class="Estado" :class="{'Finalizado': partido.Estado==1}" @click="CambiarEstado(partido)">
                                {{getDescripcionEstado(partido.Estado)}}
                            </span>
                        </div>
                    </div>

                    <div class="aliRight" v-if="modoEdicion">
                        <button class="button-8 btnCancelar" @click="Cancelar()">Deshacer cambios</button>
                        <button class="button-7 btn-guardar"
                            @click="Guardar()"
                            :class="{'no-hay-cambios': !hayCambios}"
                            :disabled="!hayCambios"
                        >
                            Guardar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NoCompetitivoServices from "../../services/no-competitivo.services";
import { mapState, mapActions } from "vuex";
export default {
    data(){
        return{
            partidosEditados: []
        }
    },
    created(){
    },
    async mounted(){
        await this.setearDataFromServer();
        this.partidosEditados = JSON.parse(JSON.stringify(this.dataFromServer));
    },
    computed: {
        ...mapState("noCompetitivo", ["dataFromServer"]),
        hayCambios(){
            return JSON.stringify(this.dataFromServer) !=  JSON.stringify(this.partidosEditados);
        },
        getPartidosByDay(){
            return [
                this.getPartidosByDay17,
                this.getPartidosByDay18,
            ];
        },
        getPartidosByDay17(){
            const result = this.partidosEditados.filter(x => x.Fecha.startsWith("17"));
            return result.sort((a, b) => a.Fecha < b.Fecha ? -1 : 1);
        },
        getPartidosByDay18(){
            const result = this.partidosEditados.filter(x => x.Fecha.startsWith("18"));
            // console.log(result);
            // console.log(result.sort((a, b) => a.Fecha < b.Fecha ? -1 : 1));
            return result.sort((a, b) => a.Fecha < b.Fecha ? -1 : 1);
        }
    },
    methods: {
        ...mapActions("noCompetitivo", ["setearDataFromServer", "setearDataFromResult"]),
        CambiarEstado(partido){
            if(this.modoEdicion)
                partido.Estado = !partido.Estado;
        },
        getDescripcionEstado(estado){
            if(estado == 0) return "Pendiente";
            return "Finalizado";
        },
        Cancelar(){
            this.partidosEditados = JSON.parse(JSON.stringify(this.dataFromServer));
        },
        async Guardar(){
            if(!this.hayCambios)
                return;

            const result = await NoCompetitivoServices.Update(this.partidosEditados);
            if(result){
                this.setearDataFromResult(result);
                this.partidosEditados = JSON.parse(JSON.stringify(this.dataFromServer));
            }
            else
                alert("No se pudo actualizar la info.");
        },
    }
};
</script>

<style lang="scss" scoped>
.container-partidos{
    width:100%;
    overflow-x: scroll;
    margin-bottom: 20px;
}
.my-table-content{
    margin-top: 20px;
}

.cont-categoria {
    text-align: center;
    padding: 10px;
    width:100%;
    display:flex;
    justify-content: center;
    .title {
        font-size: 1.5rem;
        font-weight: bold;
        width:80%;
    }
}
.my-table{
    max-height: 0px;
    display: none;
    transition: all 0.3s ease-in-out;
    &-header{
        border-bottom: 1px solid #474646 !important;
        font-weight: 700 !important;
        background: #474646 !important;
        color: white !important;
    }
    &.visible{
        display:inline-grid;
        max-height: 800px;
    }
}
.boton-ver-partidos{
    padding: 5px 15px;
    line-height: 30px;
    color: black;
    font-weight: bold;
    width:100%;
    text-align: left;
        background-color: #8aadc9;
    border: none;
    cursor: pointer;
    font-size: 0.8em;

    &:hover{
        background-color: #5c9fd6;
    }
}

.contenedor-nombre-grupo{
    width: 100%;
    display: grid;
    justify-items: center;

}

.sub-contenedor-nombre-grupo{
    min-width:800px;
    width:80%;
    text-align: left;
}

.titulo-grupo{
    background-color: rgb(71, 70, 70);
    padding: 5px 15px;
    border-radius: 5px;
    line-height: 30px;
    color: white;
    font-weight: bold;
}

.resultado-columns{
    grid-template-columns: minmax(0, 1.7fr) minmax(0, 0.8fr) minmax(0, 2fr) minmax(0, 1fr) minmax(0, 2fr) minmax(0, 1fr);
}
.container-zonas{
    width:100%;
    overflow-x: scroll;
    margin-bottom: 20px;
}
.grupoColumns{
    grid-template-columns: minmax(0, 2fr) repeat(8, minmax(0, 1fr));
}
</style>

