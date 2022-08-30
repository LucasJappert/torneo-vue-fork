<template>
  <div class="container" v-if="faseFinalEditada != null">

    <input type="button" class="button-7 btn-guardar"
        :class="{'no-hay-cambios': !hayCambios}"
        v-if="modoEdicion"
        :disabled="!hayCambios"
        @click="Guardar()"
        value="Guardar"
    />

    <!-- CUARTOS -->
    <div class="group-container">
        <div class="text-center title-etapa">CUARTOS DE FINAL</div>

        <span v-for="(partido, index) in faseFinalEditada.cuartos" :key="index">
            <BoxInfoPartido
                :partido="partido"
                :index="index"
                :cambiar-estado="CambiarEstado"
                :permito-editar="modoEdicion && partido.Estado == 0"
            />
        </span>
    </div>

    <!-- SEMIS -->
    <div class="group-container">
        <div class="text-center title-etapa">SEMIFINAL</div>

        <span v-for="(partido, index) in faseFinalEditada.semis" :key="index">
            <BoxInfoPartido
                :partido="partido"
                :index="index"
                :cambiar-estado="CambiarEstadoSemis"
                :permito-editar="modoEdicion && partido.Estado == 0 && cuartosFinalizados"
            />
        </span>
    </div>

    <!-- FINAL -->
    <div class="group-container">
        <div class="final-copa-container campeon">
            <div class="text-center icono-campeon">🏆</div>
            <div class="title-etapa text-center">FINAL COPA DE ORO</div>

            <BoxInfoPartido
                :partido="faseFinalEditada.final"
                :cambiar-estado="CambiarEstadoSemis"
                :permito-editar="modoEdicion && faseFinalEditada.final.Estado == 0 && semisFinalizadas"
            />

            <div class="pT20 pR" v-if="faseFinalEditada.final.Estado == 1">
                <div class="B text-center pT10">¡ FELICITACIONES !</div>
                <div class="B text-center pT10">🏆 {{ getCampeon }} 🏆</div>
            </div>
        </div>
    </div>

    <!-- TERCERO -->
    <div class="group-container text-center">
        <div class="final-copa-container">
            <div class="text-center icono-puesto-3">🥉</div>
            <div class="title-etapa text-center">3° PUESTO</div>
            <div>
                <div class="equipo-container puesto-3 team-name text-center">
                    {{ faseFinalEditada.tercero }}
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import FaseFinalServices from "../../services/fase-final.services";
import BoxInfoPartido from "./BoxInfoPartido.vue";
export default {
    name: "FaseFinal8Equipos",
    components: { BoxInfoPartido },
    props: {
        categoria: {
            type: Number,
            require: true
        }
    },
    data() {
        return {
            letras: ["A", "B", "C", "D"],
            faseFinalEditada: null,
            originalData: null
        }
    },
    mounted(){
        this.TrySetData();
    },
    computed: {
        hayCambios(){
            return JSON.stringify(this.originalData) !=  JSON.stringify(this.faseFinalEditada);
        },
        cuartosFinalizados(){
            return this.originalData.cuartos.find(x => x.Estado == false) == null;
        },
        semisFinalizadas(){
            return this.originalData.semis.find(x => x.Estado == false) == null;
        },
        getCampeon(){
            const match = this.faseFinalEditada.final;
            if (match.GolesEquipo1 > match.GolesEquipo2)
                return match.NombreEquipo1;

            if (match.GolesEquipo1 < match.GolesEquipo2)
                return match.NombreEquipo2;

            if ((match.GolesPorPenalesEquipo1 ?? 0) > (match.GolesPorPenalesEquipo2 ?? 0))
                return match.NombreEquipo1;

            if ((match.GolesPorPenalesEquipo1 ?? 0) < (match.GolesPorPenalesEquipo2 ?? 0))
                return match.NombreEquipo2;

            return "";
        }
    },
    methods: {
        async TrySetData(){
            this.originalData = await FaseFinalServices.GetAll();
            this.faseFinalEditada = JSON.parse(JSON.stringify(this.originalData));
        },
        CambiarEstado(partido){
            if(this.modoEdicion)
                partido.Estado = !partido.Estado;
        },
        CambiarEstadoSemis(partido){
            if(this.modoEdicion && this.cuartosFinalizados)
                partido.Estado = !partido.Estado;
        },
        async Guardar(){
            console.log("asd");
            if(!this.hayCambios)
                return;

            const result = await FaseFinalServices.Update(this.faseFinalEditada);
            if(result){
                this.originalData = result;
                this.faseFinalEditada = JSON.parse(JSON.stringify(this.originalData));
            }
            else
                console.log("No se pudo actualizar la info.");
        },
    }
}
</script>

<style lang="scss">
.container{
    position:relative;
    text-align: left;
    width:100%;
    min-width: 1200px;
    padding:40px 20px;
    background-color: rgba(0,0,0,0.1);
    box-sizing: border-box;
    display: inline-grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    & .group-container{
        width:100%;
        padding: 10px;
        & .fecha-text{
            margin-top:20px;
        }
        & .final-copa-container{
            &.campeon{
                min-height:450px;
            }
            width:100%;
            padding:20px;
            background-color: rgba(0,0,0,0.1);
            justify-content: center;
            align-items: center;
            & .icono-campeon{
                font-size:6rem;
            }
            & .icono-puesto-3{
                font-size:3rem;
            }
        }
    }
    & .equipo-container{
        width:100%;
        background-color: #fff;
        box-shadow: 0 0 3px rgba(0,0,0,0.1);
        padding: 5px 5px 5px 30px;
        margin: 5px 0;
        height: 40px;
        line-height: 30px;
        white-space: nowrap;
        overflow: hidden;
        border: 1px solid rgba(0,0,0,0.4);
        border:3px;
        align-items: center;
        display: inline-grid;
        grid-template-columns: minmax(0, 4fr) minmax(0, 1.8fr);
        align-items: center;
        justify-content:space-between;
        & > div:last-child{
            text-align:right;
            font-weight: bold;
        }
        &.letra-grupo-container{
            position:relative;
            & > div:first-child{
                position:absolute;
                top:0px;
                left:5px;
                font-weight: bold;
            }
        }
        &.puesto-3{
            display: block;
            padding: 5px;
        }
    }
}
.title-etapa{
    font-size:1.3rem;
    font-weight: bold;
    margin-top:20px;
}
.team-name{
    font-size: 0.9rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
}
.Estado{
    position:absolute;
    top: -20px;
    right: 0px;
}
.btn-guardar{
    position:absolute;
    top: 10px;
    left: 10px;
    &.no-hay-cambios{
        cursor: not-allowed;
        background-color: rgba(0,0,0,0.5);
        &:hover{
            background-color: rgba(0,0,0,0.5);
        }
    }
}
</style>
