<template>
  <div>
  <Header />
    <div class="Equipos">
      Equipos:
    </div>
  <TablasEquipos/>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import TablasEquipos from "../components/TablasEquipos.vue";
export default {
  name: 'HomeView',
  components: {
    Header,TablasEquipos
  }
}
</script>

<style>

.Equipos{
  font-size: 20px;
  padding: 10px;
  left:0px;
  padding-right: 570px;
  font-weight: bold;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

}

</style>