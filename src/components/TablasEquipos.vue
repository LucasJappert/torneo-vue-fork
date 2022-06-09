<template>
  
  <div class="divTable">
      <div class="divTableHeading">
          <div class="divTableRow">
          <div class="divTableHead">Nombre</div>
          <div class="divTableHead">Institución</div>
          <div class="divTableHead">Categoría</div>
          
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

.divTable{
	display: table;
	width: 50%;
    padding-left: 450px;
    cursor: pointer;
}
.divTableRow {
	display: table-row;
    
}
.divTableHeading {
	background-color: #5c9fd6ed;
	display: table-header-group;
	font-weight: bold;
    color: white;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    }
.divTableCell, .divTableHead {
	border: 1px solid #fff(214, 38, 38);
	display: table-cell;
	padding: 3px 10px;
}

/* .divTableBody {
	display: table-row-group;
    & .divTableCell{
        border-bottom: 1px solid #5c9fd6ed
        
    }
    & .divTableRow {
	
        border-bottom: 1px solid black;
        

        &:hover{
                background-color: rgb(190, 189, 189);
            }
}
} */

</style>