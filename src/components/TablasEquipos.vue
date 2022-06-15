<template>
  
  <div class="divTable">
        <div class="divTableHeading">
            <div class="divTableRow">
                <div class="divTableHead">Nombre</div>
                <div class="divTableHead">Institución</div>
                <div class="divTableHead">Categoría</div>
            </div>
                <div class="divTableBody">
                    <div v-for="(club, index) in arrayClubes" :key="index" class="divTableRow">
                        <div class="divTableCell">{{club.toUpperCase()}}</div>
                    </div>
                 </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'TablasEquipos',
  components: {
  }
}
</script>

<style scoped lang="scss">



</style>