<template>
    <div class="mT10 mB20">
        <div class="B titulo">Nuestros auspiciantes</div>
        <VueAgile
            class="mT10"
            :infinite="true"
            :autoplay="true"
            :slidesToShow="1"
            :center-mode="true"
            :dots="false"
            :navButtons="false"
            :options="myOptions"
        >
            <div class="slide">
                <div class="bg-slide-1"></div>
            </div>
            <div class="slide">
                <div class="bg-slide-2"></div>
            </div>
            <div class="slide">
                <div class="bg-slide-3"></div>
            </div>
            <div class="slide">
                <div class="bg-slide-4"></div>
            </div>
            <div class="slide">
                <div class="bg-slide-5"></div>
            </div>
            <div class="slide">
                <div class="bg-slide-6"></div>
            </div>
        </VueAgile>
    </div>
</template>

<script>
import { VueAgile } from 'vue-agile';
export default {
    components: { VueAgile},
    data(){
        return{
            myOptions: {
                autoplaySpeed: 2000,
                responsive: [
                    {
                        breakpoint: 720,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 1300,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 1600,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    // {
                    //     breakpoint: 900,
                    //     settings: {
                    //         navButtons: true,
                    //         dots: true,
                    //         infinite: false
                    //     }
                    // }
                ]
                }
        }
    }
}
</script>

<style lang="scss" scoped>
.slide{
    // height:200px;
    padding:10px;
        box-sizing: border-box;
    & > div{
        width: 100%;
        aspect-ratio: 16/9;
        padding: 10px;
        box-sizing: border-box;
        border: 1px solid rgba(0, 0, 0, 0.5);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        background-size: contain;
        border-radius: 5px;
        background-color: white;
        cursor: pointer;
        background-repeat: no-repeat;
        background-position: center;
        @media(max-width: 800px){
            // height: 250px;
        }
    }
    & .bg-slide-1{
        background-image: url("~@/assets/imagenes/auspiciantes/AlcidesCalvo-Color.webp");
    }
    & .bg-slide-2{
        background-image: url("~@/assets/imagenes/auspiciantes/ComunaHto-Color.webp");
    }
    & .bg-slide-3{
        background-image: url("~@/assets/imagenes/auspiciantes/AMASCA.webp");
    }
    & .bg-slide-4{
        background-image: url("~@/assets/imagenes/auspiciantes/EDMA.webp");
    }
    & .bg-slide-5{
        background-image: url("~@/assets/imagenes/auspiciantes/SANCOR.webp");
    }
    & .bg-slide-6{
        background-image: url("~@/assets/imagenes/auspiciantes/SANJUAN.webp");
    }
    
}
.titulo{
    font-size: 1.5rem;
    margin-top: 40px;
    margin-bottom: 20px;
}
</style>
