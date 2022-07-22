<template>
    <div>
        <div class="MenuDesktop">
            <router-link :to="{ name: 'home' }">
                <img class="icon" src="../assets/imagenes/humbertito.png" />
            </router-link>

            <div class="itemMenu">
                <span>Información</span>
                <div class="divDesplegable">
                    <div>
                        <router-link :to="{ name: 'InfoCategoria' }">
                            Categorías
                        </router-link>
                    </div>
                    <div>
                        <router-link :to="{ name: 'InfoInstitucion' }">
                            Instituciones
                        </router-link>
                    </div>
                    <div>
                        <router-link :to="{ name: 'InfoEquipos' }">
                            Equipos
                        </router-link>
                    </div>
                    <div>Reglamento</div>
                </div>
            </div>
            <!-- TODO:Llevar itemMenu a un componente -->
            <div class="itemMenu">
                <span>Fase de Grupos</span>
                <div class="divDesplegable">
                    <div v-for="(item, index) in infoCategorias" :key="index">
                        <router-link
                            :to="{ name: 'FaseGrupos', params: { id: item } }"
                        >
                            Categoría {{ item }}
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="itemMenu">
                <span>Fase Final</span>
                <div class="divDesplegable">
                    <div v-for="(item, index) in infoCategorias" :key="index">
                        <router-link
                            :to="{
                                name: 'FaseFinalView',
                                params: { id: item },
                            }"
                        >
                            Categoría {{ item }}
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="itemMenu">
                <span>El Club</span>
                <div class="divDesplegable">
                    <div>Canchas</div>
                </div>
            </div>
            <div v-if="modoEdicion">
                <button @click="setearModoEdicion(false)">
                    <i class="fa fa-power-off"></i>
                </button>
            </div>
        </div>

        <div class="MenuMobile">
            <img
                src="../assets/imagenes/logoClub.png"
                class="logoClub"
                alt=""
            />
            <div class="NombreClub">
                <div>ARGENTINO</div>
                <div>HUMBERTO 1° <span>{{ new Date().getFullYear() }}</span></div>
            </div>

            <MenuDesplegable />
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import MenuDesplegable from "../components/MenuDesplegable.vue";
//TODO: hacer mas tarde
export default {
    components: {
        MenuDesplegable,
    },
    data() {
        return {
            infoCategorias: [2010, 2011, 2012, 2013, 2014],
        };
    },
    computed: {
        ...mapState(["modoEdicion"]),
    },
    methods: {
        ...mapActions(["setearModoEdicion"]),
    },
};
</script>

<style scoped lang="scss">
$base-color: #5c9fd6;
.icon {
    height: 80px;
}
.MenuDesktop {
    z-index: 10;
    position: relative;
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $base-color;
    color: white;
    cursor: pointer;
    font-family: fantasy;
    text-shadow: 1px 1px 1px #0e0e0e;
    font-size: 20px;

    & .itemMenu {
        position: relative;
        padding: 5px 60px;
        & a {
            color: white;
            text-decoration: none;
        }
        &:hover > .divDesplegable {
            display: block;
            max-height: 200px;
            position: absolute;
            left: 0px;
            top: 28px;
            transition: all 0.5s linear;
        }
        & .divDesplegable {
            width: 100%;
            display: none;
            max-height: 0px;

            & div {
                padding: 5px 10px;
                background-color: #5a6f80;
                &:hover {
                    background-color: #5c9fd6;
                }
            }
        }
    }
}
.MenuMobile {
    display: none;
}

@media (max-width: 1000px) {
    .MenuDesktop {
        display: none;
    }
    .MenuMobile {
        height: 165px;
        background-color: $base-color;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        & .logoClub {
            height: 90%;
        }
        & .NombreClub {
            font-weight: bold;
            color: white;
            margin-left: 20px;
            text-align: left;
            font-size: 24px;
            & div:nth-child(1) {
                font-size: 2em;
            }
            & div:nth-child(2) {
                font-size: 1em;
                align-items: center;
                display: flex;
                & span {
                    font-size: 2em;
                    margin-left: 10px;
                }
            }
        }
    }
}
</style>
