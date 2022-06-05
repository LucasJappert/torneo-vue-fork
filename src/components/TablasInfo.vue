<template>
    <div class="divTable">
            <div class="divTableHeading">
                <div class="divTableRow">
                <div class="divTableHead">Nombre</div>
                <div class="divTableHead">Competitiva</div>
                <!-- <div class="divTableHead">Categorías</div> -->
                
                </div>
            </div>
        <div class="divTableBody">
        <div class="divTableRow">
            <div class="divTableCell">2010</div>
            <div class="divTableCell"><input type="checkbox" disabled checked/></div>
            
            
            
        </div>
        <div class="divTableRow">
            <div class="divTableCell">2011</div>
            <div class="divTableCell"><input type="checkbox" disabled/></div>
            
            
        </div>
        <div class="divTableRow">
            <div class="divTableCell">2012</div>
            <div class="divTableCell"><input type="checkbox" disabled/></div>
            
            
        </div>
        </div>
        
        
    </div>

</template>
<script>
export default {
  name: 'TablasInfo',
  components: {
  }
}
</script>

<style scoped lang="scss">

.divTable{
	display: table;
	width: 50%;
    padding-left: 450px;
}
.divTableRow {
	display: table-row;
    
}

.divTableCell, .divTableHead {
	border: 1px solid #fff(214, 38, 38);
	display: table-cell;
	padding: 3px 10px;
}
.divTableHeading {
	background-color: #5c9fd6ed;
	display: table-header-group;
	font-weight: bold;
    color: white;

        
}
.divTableFoot {
	background-color: #EEE;
	display: table-footer-group;
	font-weight: bold;
}
.divTableBody {
	display: table-row-group;
    & .divTableCell{
        border-bottom: 1px solid black
    }
    & .divTableRow {
	
        border-bottom: 1px solid black;

        &:hover{
                background-color: rgb(165, 165, 165);
            }
}
}


</style>
