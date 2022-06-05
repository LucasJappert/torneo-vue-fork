<template>
  <div>
    <Header />
    
      <div class="Categoria">
        Categorías:
      </div>
        <TablasInfo />
      <!-- <div class="TablaInfo">
        
        <thead>
          <tr class="tablacate">
            <th>Nombre</th>
            <th>Competitiva</th>
          </tr>
        </thead>
          <tr>
            <td>Ferro</td>
            <td>2005</td>
          </tr>
          <tr>
            <td>Ramona</td>
            <td>2005</td>
          </tr>
          <tr>
            <td>Argentino Humberto</td>
            <td>2005</td>
          </tr>
      </div> -->
     <!-- <img class="fondoBandera" src="../assets/bandera2.jpg"> -->

 
  </div>
  
</template>

<script>
import Header from "../components/Header.vue";
import TablasInfo from "../components/TablasInfo.vue";
export default {
  name: 'HomeView',
  components: {
    Header,TablasInfo
  }
}


</script>

<style scoped lang="scss">
.fondoBandera{
  width: 100%;
  top:0
}
.Categoria{
  font-size: 20px;
  padding: 10px;
  left:0px;
  padding-right: 570px;
  font-weight: bold;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }

.TablaInfo{
    padding: 10px;
    padding-left: 500px;
    

  & .tablacate{
    background-color: #5c9fd6ed;
    
      
    & th{
      padding: 10px;
      padding-right: 150px;
      padding-left: 150px;
      border: 1px solid;
      text-align: left; 
      
          
      }
    
    & td{
      border: 1px solid;
      padding: 10px;

      
    }
    
  }
}
</style>