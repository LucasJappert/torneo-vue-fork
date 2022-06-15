<template>
  <div class="containerMenu">
   <router-link :to="{ name:'home'}">
      <img class="icon" src="../assets/imagenes/humbertito.png">
    </router-link>
    
      <div class="itemMenu">
        <span>Información</span>
          <div class="divDesplegable">
            <div>
              <router-link :to="{ name:'InfoCategoria'}">
                Categorías
              </router-link>
            </div>
            <div>
              <router-link :to="{ name:'InfoInstitucion'}">
                Instituciones
              </router-link>
            </div>
            <div>
              <router-link :to="{ name:'InfoEquipos'}">
              Equipos
              </router-link>
              </div>
            <div>
              Reglamento
            </div>
          </div>
      </div>
      <!-- TODO:Llevar itemMenu a un componente -->
      <div class="itemMenu">
        <span>Fase de Grupos</span>
          <div class="divDesplegable">
            <div v-for="(item, index) in infoCategorias" :key="index">
              <router-link :to="{ name:'FaseGrupos', params: {id:item}}">
                Categoría {{item}}
              </router-link>
            </div>
            
          </div>
      </div>
      <div class="itemMenu">
        <span>Fase Final</span>
          <div class="divDesplegable">
            <div>Categoría 2010</div>
            <div>Categoría 2011</div>
            <div>Categoría 2012</div>
            <div>Categoría 2013</div>
            <div>Categoría 2014</div>
          </div>
      </div>
      <div class="itemMenu">
        <span>El Club</span>
          <div class="divDesplegable">
            <div>Canchas</div>
            
          </div>
      
          
      </div>
      <router-link :to="{ name:'Login'}">
      <img class="icon-user" src="../assets/imagenes/usuario.png">  
      </router-link>
      
      
  </div>
</template>

<script>
//TODO: hacer mas tarde
export default {
data() {
  return {
    infoCategorias: [
      2010, 2011, 2012, 2013, 2014
    ]
    
  
  }
}
}
</script>

<style scoped lang="scss">

.icon {
  
   height: 80px;
    
  
}
.containerMenu{
  position:relative;
  height:60px;
  width:100%;
  display:flex;
  align-items: center;
  justify-content: center;
  background-color: #5c9fd6;
  color:white;
  cursor:pointer;
  font-family: fantasy;
  text-shadow: 1px 1px 1px #0e0e0e;
  font-size: 20px;
  
  & .itemMenu{
    position:relative;
    padding: 5px 60px;
    & a{
      color:white;
      text-decoration: none;
      
    }
    &:hover > .divDesplegable{
      display: block;
      max-height: 200px;
      position: absolute;
      left: 0px;
      top: 28px;
      transition: all 0.5s linear;
    }
    & .divDesplegable{
      width:100%;
      display:none;
      max-height:0px;
      
      & div{
        padding: 5px 10px;
        background-color:#5a6f80;
        &:hover{
          background-color: #5c9fd6;
        }
      }
    }
  }
  
}

</style>