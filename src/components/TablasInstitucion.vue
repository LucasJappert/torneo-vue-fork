<template>
    
    <div class="divTable">
        <div class="divTableHeading">
            <div class="divTableRow">
                <div class="divTableHead">Institución</div>
            </div>
        </div>
        <div class="divTableBody">
            <div v-for="(club, index) in arrayClubes" :key="index" class="divTableRow">
                <div class="divTableCell">{{club.toUpperCase()}}</div>
            </div>
           
        </div>
    </div>
        
        
</template>

<script>
import clubes from "../assets/jsons/clubes-tablas-institucion.json";
export default {
  name: 'TablasInstitucion',
  components: {
  },
  data(){
      return{
          arrayClubes: clubes
      }
  },
 
}
</script>

<style scoped lang="scss">



</style>