<template>
    <div v-if="zonaEditada != null" class="container-zonas">
        <div class="contenedor-nombre-grupo">
            <div class="sub-contenedor-nombre-grupo">
                <span class="titulo-grupo">Grupo {{letras[index-1]}}</span>
            </div>
        </div>
        <div class="my-table-content">
            <div class="my-table visible">
                <div class="my-table-header grupoColumns">
                    <div class="aliLeft">Equipo</div>
                    <div>PJ</div>
                    <div>PG</div>
                    <div>PE</div>
                    <div>PP</div>
                    <div>GF</div>
                    <div>GC</div>
                    <div>DG</div>
                    <div>Ptos</div>

                </div>
                <div class="my-table-item grupoColumns" v-for="(equipo, index) in getPosiciones" :key="index">
                    <div class="aliLeft">{{equipo.Nombre}}</div>
                    <div>{{equipo.PJ}}</div>
                    <div>{{equipo.PG}}</div>
                    <div>{{equipo.PE}}</div>
                    <div>{{equipo.PP}}</div>
                    <div>{{equipo.GF}}</div>
                    <div>{{equipo.GC}}</div>
                    <div>{{equipo.DG}}</div>
                    <div class="B">{{equipo.Ptos}}</div>
                </div>

                <div @click="verResultados = !verResultados" class="boton-ver-partidos">
                    ▼ Ver partidos {{zona.nombre}}
                </div>
            </div>

            <div class="my-table" :class="{'visible': verResultados}">
                <div class="my-table-header resultado-columns bg-t c-222">
                    <div>Fecha y Hora</div>
                    <div>Cancha</div>
                    <div>Local</div>
                    <div>Resultado</div>
                    <div>Visitante</div>
                    <div>Estado</div>
                </div>

                <div class="my-table-item resultado-columns" v-for="partido in getZonaEditadaOrdenadaPorHorario">
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
                    <button class="button-8 btnCancelar" @click="Cancelar()">Cancelar</button>
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
</template>

<script>
import InfoEquipo from "../../models/InfoEquipo";
import ZonasServices from "../../services/zonas.services";
export default {
    props:{
        zona:{
            type: Array,
            required: true
        },
        index:{
            type: Number,
            required: true
        }
    },
    data(){
        return{
            verResultados: false,
            zonaEditada: null,
            letras: ["A", "B", "C", "D"]
        }
    },
    mounted(){
        this.zonaEditada = JSON.parse(JSON.stringify(this.zona));
    },
    methods:{
        getDescripcionEstado(estado){
            if(estado == 0) return "Pendiente";
            return "Finalizado";
        },
        CambiarEstado(partido){
            if(this.modoEdicion)
                partido.Estado = !partido.Estado;
        },
        async Guardar(){
            if(!this.hayCambios)
                return;

            const result = await ZonasServices.Update(this.index, this.zonaEditada);
            if(result)
                this.$emit("refresh");
            else
                alert("No se pudo actualizar la info.");
        },
        Cancelar(){
            this.zonaEditada = JSON.parse(JSON.stringify(this.zona));
            this.verResultados = false;
        }
    },
    computed:{
        getZonaEditadaOrdenadaPorHorario(){
            return this.zonaEditada.sort((a, b) => a.Fecha < b.Fecha ? -1 : 1);
        },
        getPosiciones(){
            let diccionarioPosiciones = {};
            this.zonaEditada.forEach(partido => {
                if(!(partido.NombreEquipo1 in diccionarioPosiciones))
                    diccionarioPosiciones[partido.NombreEquipo1] = new InfoEquipo(partido.NombreEquipo1);
                if(!(partido.NombreEquipo2 in diccionarioPosiciones))
                    diccionarioPosiciones[partido.NombreEquipo2] = new InfoEquipo(partido.NombreEquipo2);

                if (partido.Estado == 1){
                    if(partido.GolesEquipo1 > partido.GolesEquipo2){
                        diccionarioPosiciones[partido.NombreEquipo1].setData(3, partido.GolesEquipo1, partido.GolesEquipo2);
                        diccionarioPosiciones[partido.NombreEquipo2].setData(0, partido.GolesEquipo2, partido.GolesEquipo1);
                    }
                    if(partido.GolesEquipo1 == partido.GolesEquipo2){
                        diccionarioPosiciones[partido.NombreEquipo1].setData(1, partido.GolesEquipo1, partido.GolesEquipo2);
                        diccionarioPosiciones[partido.NombreEquipo2].setData(1, partido.GolesEquipo2, partido.GolesEquipo1);
                    }
                    if(partido.GolesEquipo1 < partido.GolesEquipo2){
                        diccionarioPosiciones[partido.NombreEquipo1].setData(0, partido.GolesEquipo1, partido.GolesEquipo2);
                        diccionarioPosiciones[partido.NombreEquipo2].setData(3, partido.GolesEquipo2, partido.GolesEquipo1);
                    }
                }
            });

            return Object.values(diccionarioPosiciones).sort((a, b) => {
                if(a.Ptos == b.Ptos){
                    if(a.DG == b.DG){
                        return a.GF < b.GF ? 1 : -1;
                    }
                    return a.DG < b.DG ? 1 : -1;
                }
                return a.Ptos < b.Ptos ? 1 : -1;
            });
        },
        hayCambios(){
            return JSON.stringify(this.zona) !=  JSON.stringify(this.zonaEditada);
        }
    }
}
</script>

<style lang="scss" scoped>
.my-table{
    max-height: 0px;
    display: none;
    transition: all 0.3s ease-in-out;
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
