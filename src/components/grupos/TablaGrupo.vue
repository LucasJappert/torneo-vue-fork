<template>
  <div>
    <div class="contenedor-nombre-grupo">
        <div class="sub-contenedor-nombre-grupo">
            <span class="titulo-grupo">Grupo {{grupo.id}}</span>
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
        <div class="my-table-item grupoColumns" v-for="item in grupo.equipos" :key="item.id">
          <div>{{item.nombre}}</div>
          <div>{{item.pj}}</div>
          <div>{{item.pg}}</div>
          <div>{{item.pe}}</div>
          <div>{{item.pp}}</div>
          <div>{{item.gf}}</div>
          <div>{{item.gc}}</div>
          <div>{{item.dg}}</div>
          <div>{{item.ptos}}</div>
        </div>
        
        
      </div>
    </div>
    <button @click="verResultados = !verResultados" class="boton-ver-partidos">▼ Partidos Grupo {{grupo.id}}</button>
    <div v-if="verResultados" class="my-table-content">
      <div class="my-table">
        <div id=partidos  class="my-table-header resultado-columns bg-t c-222">
          <div>Fecha</div>
          <div>Hora</div>
          <div>Cancha</div>
          <div>Local</div>
          <div></div>
          <div>Visitante</div>
        </div>
      </div> 
      </div>
     </div>
</template>

<script>
import {mapActions} from "vuex";
export default {
  data(){
    return{
      verResultados: false
    }
  },
  props: {
    grupo: {
      type: Object,
      required: true,
    },
  },
  methods:{
    ...mapActions("faseGruposStore", ["actualizarGrupo"]),
   
  }

   
};

</script>

<style scoped lang="scss">

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
    background-color: rgb(71, 70, 70);
    padding: 5px 15px;
    border-radius: 5px;
    line-height: 30px;
    color: white;
    font-weight: bold;
}

.boton-ver-partidos{
    padding: 5px 15px;
    line-height: 30px;
    color: black;
    font-weight: bold;
    min-width:800px;
    width:78%;
    text-align: left;
    background: #ccc;
    border: none;
    cursor: pointer;
    font-size: 0.8em;

    &:hover{
      background-color: #5c9fd6;
    }
   
}




</style>