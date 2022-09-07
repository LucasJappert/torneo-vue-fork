<template>
  <div>
    <div class="cont-categoria">
        <div class="categoria">Categoría {{ año }}</div>
    </div>
    <div class="itemCopa">
      <button :class="{ active: (1 == copaActiva) }" @click="copaActiva = 1">Copa de Oro 🏆</button>
      <button :class="{ active: (2 == copaActiva) }" @click="copaActiva = 2">
        Copa de Plata
        <i
          class="fa fa-trophy"
          style="color: #a29d9d; font-size: 22px;"
        ></i>
      </button>
    </div>
    <div class="overflow-scroll">
        <FaseFinal8Equipos :categoria="Number($route.params.id)" />
    </div>
  </div>
</template>

<script>
import FaseFinal8Equipos from "../components/fase-final/FaseFinal8Equipos.vue";
// import FaseFinal4Equipos from "../components/fase-final/FaseFinal4Equipos.vue";
export default {
    components:{ FaseFinal8Equipos },
    data() {
        return {
        año: "",
        copaActiva: 1
        };
    },
    mounted() {
        console.log(this.$route.params.id);
        this.año = this.$route.params.id;
    },
};
</script>

<style scoped lang="scss">
.itemCopa {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  border-bottom: 1px solid #dee2e6;
  padding-top: 20px;
  height: 45px;
  box-sizing: content-box;
}
button {
  position: relative;
  cursor: pointer;
  font-size: 20px;
  background-color: transparent;
  color: #495057;
  /* margin-bottom: -50px; */
  padding: 10px 15px;
  border: 1px solid transparent;
  line-height:25px;

  &.active {
    border: 1px solid #dee2e6;
    border-bottom: 1px solid #fff;
    transition:all 0.3s;
    border-radius:2px;
  }
}

.categoria{
  font-size: 1.5em;
  padding: 5px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: bold;
}

.cont-categoria{
  text-align: left ;
  padding: 10px;

}
.overflow-scroll{
    overflow: hidden;
    overflow-x: scroll;
    width: 100%;
}
</style>
