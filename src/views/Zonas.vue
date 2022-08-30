<template>
    <div>
        <div class="cont-categoria">
            <span class="title">Categoría {{ $route.params.id }}</span>
        </div>

        <div class="" v-if="infoZonas != null">

            <div class="" v-for="(zona, index) in infoZonas" :key="index">
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
.my-table-content{
    margin-top: 20px;
}

.cont-categoria {
    text-align: center;
    padding: 10px;
    width:100%;
    display:flex;
    justify-content: center;
    .title {
        font-size: 1.5rem;
        font-weight: bold;
        width:80%;
    }
}
.mT20{
  margin-top: 20px;
}

</style>
