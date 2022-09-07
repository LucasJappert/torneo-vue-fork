<template>
  <div class="container" v-if="faseFinalEditada != null">

    <input type="button" class="button-7 btn-guardar"
        v-if="modoEdicion"
        :class="{'no-hay-cambios': !hayCambios}"
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

<style lang="scss" scoped>
@import "../../assets/css/fase-final.scss";
</style>
