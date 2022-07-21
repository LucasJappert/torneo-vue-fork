<template>
  <div>
    <div class="cont-categoria">
      <span class="categoria">Categoría {{año}}</span>          
    </div>
    <TablasGrupos />
  </div>
  
</template>

<script>
import TablasGrupos from "../components/grupos/TablasGrupos.vue";
export default {
  name: 'HomeView',
  components: {
    TablasGrupos
  },
  data() {
  return {
  
    año:""
    
  
  }
},
  mounted(){
   console.log(this.$route.params.id);
    this.año= this.$route.params.id;
  }
}

</script>

<style scope lang="scss">

.categoria{
  font-size: 1.5em;
  padding: 150px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: bold;
}

.cont-categoria{
  text-align: left ;
  padding: 10px;
  
}

</style>