<template>
  <div>
    <div class="view-container">
      <div class="sub-container">
         <div class="Equipos">
          Equipos:
         </div>
            <TablasEquipos/>
      </div>
    </div>       
  </div>
</template>

<script>
import TablasEquipos from "../components/TablasEquipos.vue";
export default {
  name: 'HomeView',
  components: {
    TablasEquipos
  }
}
</script>

<style>

.Equipos{
  font-size: 1.1em;
  padding: 10px;
  left:0px;
  font-weight: bold;
  text-align: left;
 

}

</style>