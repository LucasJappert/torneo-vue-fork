<template>
  <div>
    <div class="my-table-content">
      <div class="my-table">
        <div class="my-table-header columnas-seccion-equipos">
          <div>Institución</div>
          <div>Categorías</div>
          
        </div>
        <div class="my-table-item columnas-seccion-equipos" v-for="(club, index) in clubes" :key="index" >
            <div class="divTableCell">{{club.nombre}}</div>
            <div class="divTableCell">{{club.categorias.join(' - ')}}</div>
        </div>
        
        
      </div>
    </div>
  </div>
  <!-- <div class="divTable">
        <div class="divTableHeading">
            <div class="divTableRow">
                <div class="divTableHead">Institución</div>
                <div class="divTableHead">Categoría</div>
            </div>
        </div>    
                <div class="divTableBody">
                    <div v-for="(club, index) in arrayEquipos" :key="index" class="divTableRow">
                        <div class="divTableCell">{{club.toUpperCase()}}</div>
                    </div>
                 </div>
        
  </div> -->

  
</template>

<script>
import infoClubes from "../assets/jsons/clubes-tablas-equipos.json";
export default {
  name: 'TablasEquipos',
  components: {
  },
   data(){
      return{
          clubes: infoClubes.clubes
      }
  },
  mounted(){
  }
}
</script>

<style scoped lang="scss">

.my-table{
    border: none;
}
.divTableCell, .divTableHead {
    border: 1px solid #fff(214, 38, 38);
	display: table-cell;
	padding: 7px 10px;
    font-size: 16px;
    
    }

.my-table-header{
    background-color: #5c9fd6ed;
	font-weight: bold;
    color: white;
    font-family:Verdana, Geneva, Tahoma, sans-serif;    
    border-bottom:none;
    font-size: 16px;

}
</style>