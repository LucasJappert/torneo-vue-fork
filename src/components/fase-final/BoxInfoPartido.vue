<template>
    <div>
        <div class="fecha-text">
            <div v-if="modoEdicion && partido.Estado == 0">
                <input class="input-general" type="text" v-model="partido.Fecha" />
            </div>
            <div v-else>
                {{ partido.Fecha }}
            </div>
            Cancha
            <span v-if="modoEdicion && partido.Estado == 0">
                <input class="input-general cancha" type="text" v-model="partido.Cancha" />
            </span>
            <span v-else>
                {{ partido.Cancha }}
            </span>
        </div>
        <div class="pR">
            <div class="Estado" :class="{'Finalizado': partido.Estado==1}" @click="cambiarEstado(partido)">
                {{ partido.Estado == false ? "Pendiente" : "Finalizado" }}
            </div>
            <div class="equipo-container letra-grupo-container">
                <div> {{ getLetter }}</div>
                <div class="team-name">{{ partido.NombreEquipo1 }}</div>
                <div v-if="permitoEditar">
                    <span v-if="partido.GolesEquipo1 == partido.GolesEquipo2">
                        (<input class="input-goles" type="number" v-model.number="partido.GolesPorPenalesEquipo1" />)
                    </span>
                    <input class="input-goles" type="number" v-model.number="partido.GolesEquipo1" />
                </div>
                <div v-else>
                    <span v-if="partido.GolesEquipo1 == partido.GolesEquipo2 && partido.Estado == 1">
                        ({{ partido.GolesPorPenalesEquipo1 }})
                    </span>
                    {{ partido.GolesEquipo1 }}
                </div>
            </div>
            <div class="equipo-container">
                <div class="team-name">{{ partido.NombreEquipo2 }}</div>
                <div v-if="permitoEditar">
                    <span v-if="partido.GolesEquipo1 == partido.GolesEquipo2">
                        (<input class="input-goles" type="number" v-model.number="partido.GolesPorPenalesEquipo2" />)
                    </span>
                    <input class="input-goles" type="number" v-model.number="partido.GolesEquipo2" />
                </div>
                <div v-else>
                    <span v-if="partido.GolesEquipo1 == partido.GolesEquipo2 && partido.Estado == 1">
                        ({{ partido.GolesPorPenalesEquipo2 }})
                    </span>
                    {{ partido.GolesEquipo2 }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BoxInfoPartido",
    props: {
        partido: {
            type: Object,
            require: true,
        },
        cambiarEstado: {
            type: Function,
            require: true,
        },
        index: {
            type: Number,
            default: -1
        },
        permitoEditar: {
            type: Boolean,
            require: true
        }
    },
    data() {
        return {
            letras: ["A", "B", "C", "D"]
        }
    },
    computed: {
        getLetter(){
            if (this.index > -1 && this.index < this.letras.length)
                return this.letras[this.index];
            return "";
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/fase-final.scss";
.input-general{
    text-align: left;
    width: 140px;
    font-size:1rem;
    &.cancha{
        width: 40px;
        text-align: center;
    }
}
</style>
