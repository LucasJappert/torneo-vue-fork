<template>
  <div>
    <div class="contenedor-nombre-grupo">
        <div class="sub-contenedor-nombre-grupo">
            <span class="titulo-grupo">Grupo {{copiaGrupo.id}}</span>
            <button @click="actualizarGrupo(copiaGrupo)" class="guardar-datos-nuevos">Guardar Cambios</button>
        </div>
    </div>
    <div class="my-table-content">
      <div class="my-table">
        <div class="my-table-header grupoColumns">
          <div>Equipo</div>
          <div>PJ</div>
          <div>PG</div>
          <div>PE</div>
          <div>PP</div>
          <div>GF</div>
          <div>GC</div>
          <div>DG</div>
          <div>Ptos</div>
          
        </div>
        <div class="my-table-item grupoColumns" v-for="item in copiaGrupo.equipos" :key="item.id">
          <div><input type="text" v-model="item.nombre"></div>
          <div><input type="number" v-model="item.pj"></div>
          <div><input type="number" v-model="item.pg"></div>
          <div><input type="number" v-model="item.pe"></div>
          <div><input type="number" v-model="item.pp"></div>
          <div><input type="number" v-model="item.gf"></div>
          <div><input type="number" v-model="item.gc"></div>
          <div><input type="number" v-model="item.dg"></div>
          <div><input type="number" v-model="item.ptos"></div>
        </div>
      </div>
    </div>
    <button class="boton-ver-partidos">▼ Partidos Grupo {{copiaGrupo.id}}</button>
  </div>
</template>

<script>
import {mapActions} from "vuex";
export default {
  props: {
    grupo: {
      type: Object,
      required: true,
    },
  },
  data(){
    return{
      copiaGrupo: {}
    }
  },
  mounted(){
    this.copiaGrupo = JSON.parse(JSON.stringify(this.grupo));
  },
  methods:{
    ...mapActions("faseGruposStore", ["actualizarGrupo"])
  }
};
</script>

<style scoped>

.contenedor-nombre-grupo{
    width: 100%;
    display: grid;
    justify-items: center;

}

.sub-contenedor-nombre-grupo{
    min-width:800px;
    width:80%;
    text-align: left;
}

.titulo-grupo{
    background-color: rgb(39, 141, 196);
    padding: 5px 15px;
    border-radius: 5px;
    line-height: 30px;
    color: white;
    font-weight: bold;
}



.my-table-header{
     background-color: rgb(39, 141, 196);
}

input{
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  text-align: center;
  outline-color: rgb(39, 141, 196);
  box-shadow: inset 0 -1px 0 rgba(0,0,0,.3);
  color:rgb(39, 141, 196)
  

}

.my-table-item {
  background-color: rgb(255, 255, 255);

}

.guardar-datos-nuevos{
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  padding: 5px 5px;
}
</style>