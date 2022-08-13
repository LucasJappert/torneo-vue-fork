<template>
    <div>
        <div class="IconoHamburguer" @click="MenuVisible = !MenuVisible">☰</div>
        <div class="MenuDesplegable" :class="{ Visible: MenuVisible }">
            <div class="IconoCruz" @click="CerrarMenu()">✖</div>
                <div class="contenedorMenu">
                    <div class="contedorNiveles" :class="{Nivel2Visible: ItemNivel1Seleccionado != 0 }">
                        <div class="contedorNivel1">
                           <div v-for="key in Object.keys(Items)" :key="key"
                                @click="VerNivel2(key)"    
                            >
                             {{Items[key].name}}
                           </div>
                        </div>
                        <div class="contedorNivel2" >
                            <img src="../assets/imagenes/back.png" @click="VerNivel1()">
                            <div v-for="(item, index) in ObtenerItemsNivel2" :key="index">
                                <a v-if="item.urlpdf != null" :download="item.downloadFileName" :href="item.urlpdf">
                                    <img class="Pdf" src="../assets/imagenes/pdf.png" >
                                {{item.name}}
                                </a>
                                <router-link v-else :to="{ name: item.seccion.name, params:item.seccion.params}">
                                    {{item.name}}
                                </router-link>
                            </div>
                        </div>
                    </div>

                    
                </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            MenuVisible: false,
            ItemsNivel1: ["INFORMACIÓN","FASE DE GRUPOS","FASE FINAL","EL CLUB"],
            Items:{
                1: {
                    name:"INFORMACIÓN 🢂",
                    items:[
                        {
                            name:"Categorías",
                            seccion: {
                                name: 'InfoCategoria',
                            },
                        },
                        {
                            name:"Instituciones",
                            seccion: {
                                name: 'InfoInstitucion',
                            },
                        },
                        {
                            name:"Equipos",
                            seccion: {
                                name: 'InfoEquipos',
                            },
                        },
                        {
                            name:"Reglamento",
                            seccion: {
                                name: '',
                            },
                            urlpdf:"/src/pdfs/Reglamento2022.pdf",
                            downloadFileName:"Reglamento2022.pdf"

                        },
                    ]
                    
                },
                2:{
                    name:"FASE DE GRUPOS 🢂",
                    items: [
                        {
                            name:"Categoria 2012",
                            seccion: {
                                name: 'FaseGrupos',
                                params: {
                                    id: 2012
                                }
                            }
                        },
                        {
                            name:"Categoria 2013",
                            seccion: {
                                name: 'FaseGrupos',
                                params: {
                                    id: 2013
                                }
                            }
                        },
                        {
                            name:"Categoria 2014",
                            seccion: {
                                name: 'FaseGrupos',
                                params: {
                                    id: 2014
                                }
                            }
                        },
                        {
                            name:"Categoria 2015",
                            seccion: {
                                name: 'FaseGrupos',
                                params: {
                                    id: 2015
                                }
                            }
                        },
                        {
                            name:"Categoria 2016",
                            seccion: {
                                name: 'FaseGrupos',
                                params: {
                                    id: 2016
                                }
                            }
                        }
                    ]
                },
                3:{
                    name:"FASE FINAL 🢂",
                    items: [
                        {
                            name:"Categoria 2012",
                            seccion: {
                                name: 'FaseFinalView',
                                params: {
                                    id: 2012
                                }
                            }
                        },
                        {
                            name:"Categoria 2013",
                            seccion: {
                                name: 'FaseFinalView',
                                params: {
                                    id: 2013
                                }
                            }
                        },
                        {
                            name:"Categoria 2014",
                            seccion: {
                                name: 'FaseFinalView',
                                params: {
                                    id: 2014
                                }
                            }
                        },
                        {
                            name:"Categoria 2015",
                            seccion: {
                                name: 'FaseFinalView',
                                params: {
                                    id: 2015
                                }
                            }
                        },
                        {
                            name:"Categoria 2016",
                            seccion: {
                                name: 'FaseFinalView',
                                params: {
                                    id: 2016
                                }
                            }
                        }
                    ]

                },
                4:{
                    name:"EL CLUB 🢂",
                    items:[{
                            name:"Canchas",
                            seccion: {
                                
                               
                            }
                        }]
                }
            }, 
            ItemNivel1Seleccionado: 0,
        };
    },
    mounted() {},
    methods:{
        VerNivel2(index){
            this.ItemNivel1Seleccionado=index;

            
        },
        VerNivel1(){
            this.ItemNivel1Seleccionado=0;
        },
        CerrarMenu(){
            this.MenuVisible = false; 
            this.ItemNivel1Seleccionado = 0;
        },


    },
    computed:{
        ObtenerItemsNivel2(){
            if(this.ItemNivel1Seleccionado in this.Items)
                return this.Items[this.ItemNivel1Seleccionado].items;

            return [];
            
        }
    }
};
</script>

<style scoped lang="scss">
.MenuDesplegable {
    position: absolute;
    left: -430px;
    top: 0;
    width: 400px;
    height: 100%;
    max-width: 400px;
    overflow-x: scroll;
    background-color: #444;
    transition: all 0.2s;
    box-shadow: 0 0 30px black;
    &.Visible {
        left: 0;
    }
}
.IconoHamburguer, .IconoCruz {
    color: white;
    font-size: 64px;
    cursor: pointer;
    position: absolute;
    left: 40px;
    top:0;
    line-height: 165px;
    font-weight: bold;
}
.contenedorMenu{
    color: white;
    cursor: pointer;
    padding-top: 150px;
    width: 100%;
    font-weight: bold;
    font-family:system-ui;
    font-size: 1.5em;
    text-shadow: 2px 2px 2px #0e0e0e;
    overflow: hidden;
    height: 100%;
    box-sizing: border-box;
    
    
}
.contedorNiveles{
    width: 200%;
    height: 100%;
    display: flex;
    transition: all 0.2s;
    & > div{
        width: 50%;
        height: 100%;
        & > div{
            transition: all 0.2s linear;
            width: 100%;
            display: block;
            text-decoration: none;
            color:white;
            text-align: left;
            box-sizing: border-box;
            height: auto;
        } 
        & > div:hover{
            background-color: #5c9fd6;
            transition: all 0.2s linear;
        } 
    }
    & > .contedorNivel1{
        & > div {
            padding: 30px;
        }
    }
    & > .contedorNivel2{
        & > div {
            & > a{
                padding: 30px;
                width: 100%;
                display: block;
                text-decoration: none;
                color:white;
                margin-top: 65px;
                margin-bottom: -65px;

               
            }
        }
    }
    & > div:nth-child(1){
        background-color:#444;
    }
    & > div:nth-child(2){
        background-color:#444;
    }
    &.Nivel2Visible{
       margin-left: -100%;
    }
}
img { 
    float: left;
    margin-left: 35px;
    width: 65px;
    
}
 .Pdf{
    width: 25px;
    float: right;
    margin-right: 238px;
    margin-bottom: -30px;
    margin-top: 5px;
                }
</style>
