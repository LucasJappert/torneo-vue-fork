<template>
  <div class="">
      <div v-for="(item, index) in infoGrupos.arrayGrupos" :key="index">
          <TablaGrupo :grupo="item" class="mT20" />
          <TablaGrupoCopia v-if="modoEdicion" :grupo="item"/>
          <div v-else>

          </div>
      </div>

  </div>
</template>

<script>

// import infoGrupos from "../../assets/jsons/clubes-tablas-grupos.json";
import TablaGrupo from "./TablaGrupo.vue";
import TablaGrupoCopia from "./TablaGrupoCopia.vue"
import { mapState, mapActions }  from "vuex";
export default {
name: 'TablasGrupos',
  components: {
    TablaGrupo, TablaGrupoCopia
  },
  mounted(){
    // this.infoGrupos = this.ObtenerFaseGrupos(2022, 2010);
    this.setearInfoGrupos(this.$route.params.id);
  },
  computed: { 
    ...mapState("faseGruposStore", ["infoGrupos"]),
    ...mapState(["modoEdicion"])
  },
  methods: {
    ...mapActions("faseGruposStore", ["setearInfoGrupos"])
  }

}
</script>

<style scoped lang="scss">

.mT20{
  margin-top: 20px;
}
  
</style>