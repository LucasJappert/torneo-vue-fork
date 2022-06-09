<template>
  <div>
      <Header />
       <div class="Instituciones">
        Instituciones:
      </div>
      <TablasInstitucion />

  </div>
</template>

<script>
import Header from "../components/Header.vue";
import TablasInstitucion from "../components/TablasInstitucion.vue";
export default {
  name: 'HomeView',
  components: {
    Header,TablasInstitucion
  }
}
</script>


<style>

.Instituciones{
  font-size: 20px;
  padding: 10px;
  left:0px;
  padding-right: 570px;
  font-weight: bold;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
</style>