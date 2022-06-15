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
          <div><input type="text" v-model="item.nombre"></div>
          <div><input type="text" v-model="item.pj"></div>
          <div><input type="text" v-model="item.pg"></div>
          <div><input type="text" v-model="item.pe"></div>
          <div><input type="text" v-model="item.pp"></div>
          <div><input type="text" v-model="item.gf"></div>
          <div><input type="text" v-model="item.gc"></div>
          <div><input type="text" v-model="item.dg"></div>
          <div><input type="text" v-model="item.ptos"></div>
        </div>
      </div>
    </div>
    <button class="boton-ver-partidos">▼ Partidos Grupo {{grupo.id}}</button>
  </div>
</template>

<script>
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
    this.copiaGrupo = {...this.grupo};
    // console.log(this.copiaGrupo)
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

.boton-ver-partidos{
    padding: 5px 15px;
    line-height: 30px;
    color: black;
    font-weight: bold;
    min-width:800px;
    width:75%;
    text-align: left;
    background: #ccc;
    border: none;
    cursor: pointer;
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
</style>