<template>
    <div>
        <div class="cont-title">
            <span class="title">Nuestras Canchas:</span>
        </div>

        <div class="image-container">
            <img src="../assets/imagenes/cancha.webp" class="Mapa" alt="Imagen canchas" />
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "../assets/css/mapa-view.scss";
.Mapa{
    width: 800px;
}
.title{
    font-size: 1.5em;
    padding: 5px;
    font-weight: bold;
}
.image-container{
    overflow-x: scroll;
}
.cont-title{
    padding: 15px;
}

</style>
