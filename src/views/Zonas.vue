<template>
    <div>
        <div class="cont-categoria">
            <span class="categoria">Categoría {{ $route.params.id }}</span>
        </div>

        <div class="" v-if="infoZonas != null">

            <div class="my-table-content" v-for="(zona, index) in infoZonas" :key="index">
                <InfoZona :zona="zona" :index="Number(index)" @refresh="setearZonas()" ></InfoZona>
            </div>
            <!-- <div v-for="(item, index) in infoGrupos.arrayGrupos" :key="index">
                <TablaGrupo :grupo="item" class="mT20" />
            </div> -->

        </div>
    </div>
</template>

<script>

import InfoZona from "../components/grupos/InfoZona.vue";
import { mapState, mapActions }  from "vuex";
export default {
name: 'TablasGrupos',
    components: {
        InfoZona
    },
  async mounted(){
    await this.setearZonas();
    console.log(this.infoZonas);

  },
  computed: {
    ...mapState("zonas", ["infoZonas"]),
    ...mapState(["modoEdicion"]),
  },
  methods: {
    ...mapActions("zonas", ["setearZonas"])
  }

}
</script>

<style scoped lang="scss">

.categoria {
    font-size: 1.5em;
    padding: 150px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: bold;
}

.cont-categoria {
    text-align: left;
    padding: 10px;
}
.mT20{
  margin-top: 20px;
}

</style>
