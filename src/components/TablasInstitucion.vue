<template>
    <div class="divTable">
          <div class="divTableHeading">
              <div class="divTableRow">
              <div class="divTableHead">Institución</div>
              </div>
          </div>
          <div class="divTableBody">
            <div class="divTableRow">
                <div class="divTableCell">9 de Julio Rafaela</div>
            </div>
            <div class="divTableRow">
                <div class="divTableCell">ARGENTINOS FC (Humberto 1°)</div>
            </div>
            <div class="divTableRow">
                <div class="divTableCell">ATLETICO CERES UNION</div>
            </div>
            <div class="divTableRow">
                <div class="divTableCell">Atletico de Rafaela</div>
            </div>
            <div class="divTableRow">
                <div class="divTableCell">Ben Hur de Rafaela</div>
            </div>
            <div class="divTableRow">
                <div class="divTableCell">C.A.S (HUMBOLDT)</div>
            </div>
            <div class="divTableRow">
                <div class="divTableCell">C.C.S.J (SAN JUSTO)</div>
            </div>
            <div class="divTableRow">
                <div class="divTableCell">C.J SPORTIVO BELGRANO (LA PARA)</div>
            </div>
            <div class="divTableRow">
                <div class="divTableCell">C.S y D BELLA ITALIA</div>
            </div>
             <div class="divTableRow">
                <div class="divTableCell">Esc. 2 de Abril Rafaela</div>
            </div>
             <div class="divTableRow">
                <div class="divTableCell">Esc.BARRIO FATIMA</div>
            </div>
             <div class="divTableRow">
                <div class="divTableCell">Esc.BARRIO ITALIA</div>
            </div>
             <div class="divTableRow">
                <div class="divTableCell">ESPERANZA FC</div>
            </div>
             <div class="divTableRow">
                <div class="divTableCell">Ferrocarril del Estado de Rafaela</div>
            </div>
             <div class="divTableRow">
                <div class="divTableCell">FLORIDA (CLUCELLAS)</div>
            </div>
             <div class="divTableRow">
                <div class="divTableCell">LIBERTAD DE SUNCHALES</div>
            </div>
             <div class="divTableRow">
                <div class="divTableCell">MORENO DE LEHMANN</div>
            </div>
             <div class="divTableRow">
                <div class="divTableCell">Peñarol de Rafaela</div>
            </div>
             <div class="divTableRow">
                <div class="divTableCell">PIRATITAS FC (ESPERANZA)</div>
            </div>
             <div class="divTableRow">
                <div class="divTableCell">Quilmes de Rafaela</div>
            </div>
             <div class="divTableRow">
                <div class="divTableCell">SAN JORGE (BRINKMANN)</div>
            </div>
             <div class="divTableRow">
                <div class="divTableCell">Sc. Minotto Mza</div>
            </div>
             <div class="divTableRow">
                <div class="divTableCell">Sportivo Norte de Rafaela</div>
            </div>
             <div class="divTableRow">
                <div class="divTableCell">UNION CRESPO</div>
            </div>
             <div class="divTableRow">
                <div class="divTableCell">Union de Sunchales</div>
            </div>
            
            
        </div>
        </div>
        
        
    
</template>

<script>
export default {
  name: 'TablasInstitucion',
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

    .divTableRow:nth-child(2n+2){
    background: #c8d7e3ed;
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
.divTableBody {
	display: table-row-group;
    & .divTableCell{
        border-bottom: 1px solid #5c9fd6ed
        
    }
    & .divTableRow {
	
        border-bottom: 1px solid black;
        

        &:hover{
                background-color: rgb(212, 205, 205);
                transition: all 0.5s;
            }
}
}

</style>