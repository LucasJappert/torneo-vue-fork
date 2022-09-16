<template>
  <div id="app">
    <div class="ContenedorImagenFondo">
      <div class="ImagenFondo"></div>
    </div>
    <Header />
    <div class="view-container">
      <router-view :key="$route.fullPath"/>

      <SlideAuspiciantes />
    </div>
    <br>
    <br>
  </div>
</template>

<script>
// import confetti from "./assets/js/confetti.js";
import Header from "./components/Header.vue";
import {mapActions} from "vuex";
export default {
    name: 'App',
    components: {
        Header,
    },
    created(){
        console.log(process.env.VUE_APP_ENV);
        if(process.env.VUE_APP_ENV == "PROD"){
            if (location.href.match(/^http:/i)){
                location.replace(location.href.replace(/^http:/i, 'https:'));
                return;
            }
        }
        document.title = `Torneo Humbertito ${new Date().getFullYear()}`;
        this.intentoSetearModoEdicionDesdeLocalStorage();
    },
    mounted(){
        setTimeout(() => {
            // console.log(this.$route.query.modoEdicion);
            if (this.$route.query.modoEdicion === null){
            this.setearModoEdicion(true);
            const primeraParteUrl = window.location.href.split("?")[0];
            window.location.href = primeraParteUrl;
            return;
            }

        }, 1000);
        // console.log(window.location.href.searchParams.get("test"));

    },
    methods:{
        ...mapActions(["setearModoEdicion","intentoSetearModoEdicionDesdeLocalStorage"]),
        ...mapActions("zonas", ["resetState"]),
    },
    watch: {
        $route() {
            this.resetState();
        },
    },
}
</script>

<style lang="scss">
@import "./assets/css/index.scss";
@import "./assets/css/botones.scss";
@import "./assets/css/my-table.scss";
@import url("https://use.fontawesome.com/releases/v5.5.0/css/all.css");


*{
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
body{
  margin:0;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100%;
    overflow: hidden;
    min-height: 300px;
//   min-width: 1000px;
}
.ContenedorImagenFondo{
  position:fixed;
  width:100%;
  height:100%;
  z-index:-1;
  display:block;
  opacity: 0.05;
}
.ImagenFondo{
  height:100%;
  width:100%;
  background-image: url("./assets/imagenes/bandera.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
