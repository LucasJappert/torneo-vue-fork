<template>
    <div>
        <div class="IconoHamburguer" @click="MenuVisible = !MenuVisible">☰</div>
        <div class="MenuDesplegable" :class="{ Visible: MenuVisible }">
            <div class="IconoHamburguer" @click="MenuVisible = !MenuVisible">✖</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            MenuVisible: false,
        };
    },
    mounted() {},
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
.IconoHamburguer {
    color: white;
    font-size: 64px;
    cursor: pointer;
    position: absolute;
    left: 40px;
    top:0;
    line-height: 165px;
    font-weight: bold;
}
</style>
