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
        <div class="divTableRow">
            <div class="divTableCell">2013</div>
            <div class="divTableCell"><input type="checkbox" disabled/></div>
            
            
        </div>
        <div class="divTableRow">
            <div class="divTableCell">2014</div>
            <div class="divTableCell"><input type="checkbox" disabled/></div>
            
            
        </div>
        <div class="divTableRow">
            <div class="divTableCell">2015</div>
            <div class="divTableCell"><input type="checkbox" disabled/></div>
            
            
        </div>
        <div class="divTableRow">
            <div class="divTableCell">2016</div>
            <div class="divTableCell"><input type="checkbox" disabled/></div>
            
            
        </div>
        <div class="divTableRow">
            <div class="divTableCell">2017</div>
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

<style ks>

.divTable{
	display: table;
	width: 50%;
    padding-left: 450px;
    cursor: pointer;
}
.divTableRow {
	display: table-row;
    
}
 .divTableRow:nth-child(2n+2){
    background: #aacae5ed;
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
    font-family:Verdana, Geneva, Tahoma, sans-serif;
        
}
.divTableFoot {
	background-color: #EEE;
	display: table-footer-group;
	font-weight: bold;
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
            } */
        
        
/* }
} */


</style>
