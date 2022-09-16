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
                    <div>
                        <a download="Reglamento2022.pdf" href="/src/pdfs/Reglamento2022.pdf">
                            Reglamento
                            <img class="Pdf" src="../assets/imagenes/pdf.png" />
                        </a>
                    </div>
                    <div>
                        <a download="Planilla.pdf" href="/src/pdfs/Planilla.pdf">
                            Planilla de Buena Fe
                            <img class="Pdf" src="../assets/imagenes/pdf.png" />
                        </a>
                    </div>
                </div>
            </div>
            <!-- TODO:Llevar itemMenu a un componente -->
            <div class="itemMenu">
                <span>Fase de Grupos</span>
                <div class="divDesplegable">
                    <div v-for="(item, index) in infoCategorias" :key="index">
                        <router-link :to="{ name: 'Zonas', params: { id: item } }" >
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
                <span>No Competitivo</span>
                <div class="divDesplegable">
                    <div>
                        <router-link
                            :to="{
                                name: 'NoCompetitivoView',
                                params: { id: 2016 },
                            }"
                        >
                            Categoría 2016
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="itemMenu">
                <span>El Club</span>
                <div class="divDesplegable">
                    <router-link :to="{ name: 'MapaView' }">
                        Canchas
                    </router-link>
                </div>
            </div>
            <div v-if="modoEdicion">
                <div @click="setearModoEdicion(false)">
                    <i class="fa fa-power-off"></i>
                </div>
            </div>
        </div>

        <div class="MenuMobile">
            <div v-if="modoEdicion" class="only-mobile">
                <div @click="setearModoEdicion(false)">
                    <i class="fa fa-power-off"></i>
                </div>
            </div>
            <router-link :to="{ name: 'home' }" class="linkLogo">
                <div class="NombreClub">
                    <div>ARGENTINO</div>
                    <div>HUMBERTO 1° <span>{{ new Date().getFullYear() }}</span></div>
                </div>

                <img
                    src="../assets/imagenes/logoClub.png"
                    class="logoClub"
                    alt=""
                />
            </router-link>

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
            infoCategorias: [2012, 2013, 2014, 2015],
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
    height: 60px;
}
.MenuDesktop {
    z-index: 10;
    position: relative;
    height: 60px;
    width: 100%;
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: minmax(60px, 60px) repeat(5, minmax(0, 1fr)) minmax(0, 0.3fr);
    background-color: $base-color;
    color: white;
    cursor: pointer;
    font-family: fantasy;
    text-shadow: 1px 1px 1px #0e0e0e;
    font-size: 20px;
    & > a {
        height:60px;
    }
    & .itemMenu {
        position: relative;
        // padding: 5px 60px;
        height: 100%;
        line-height: 60px;
        & a {
            color: white;
            text-decoration: none;
        }
        & .divDesplegable {
            width: 100%;
            max-height: 0px;
            transition: opacity 0.2s linear;
            overflow: hidden;
            opacity:0;
            line-height: 35px;
            & div, a {
                width:100%;
                display:block;
                padding: 5px 10px;
                background-color: #5a6f80;
                &:hover {
                    background-color: #5c9fd6;
                }
            }
        }
        &:hover > .divDesplegable {
            display: block;
            max-height: 400px;
            position: absolute;
            left: 0px;
            top: 60px;
            opacity:1;
        }
    }
}
.MenuMobile {
    display: none;
}

.Pdf{
  width: 20px
}

@media (max-width: 1000px) {
    .MenuDesktop {
        display: none;
    }
    .MenuMobile {
        height: 125px;
        background-color: $base-color;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: right;
        padding-right: 10px;

        & > .logoClub {
            height: 110px;
        }

        & .NombreClub {
            font-weight: bold;
            color: white;
            margin-left: 5px;
            text-align: left;
            font-size: 1.2rem;
            // font-size: 24px;

            & div:nth-child(1) {
                font-size: 2rem;

            }
            & div:nth-child(2) {
                font-size: 1em;
                align-items: center;
                display: flex;

                & span {
                    // font-size: 2rem;
                    margin-left: 10px;
                }
            }
        }

    }
    .linkLogo{
        display: flex;
        align-items: center;
        justify-content: right;
        text-decoration: none;
        }
    .logoClub {
            height: 110px;
        }
    .only-mobile{
        position: absolute;
        top: 140px;
        right: 10px;
        font-size: 2rem;
        color: red;
    }
}
</style>
