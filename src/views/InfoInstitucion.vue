<template>
  <div class="sub-container">
    <div class="Instituciones">
      Instituciones:
    </div>
    <TablasInstitucion />
  </div>
</template>

<script>
import TablasInstitucion from "../components/TablasInstitucion.vue";
export default {
  name: 'HomeView',
  components: {
    TablasInstitucion
  }
}
</script>


<style>

.Instituciones{

  padding: 10px;
  font-weight: bold;
  font-size: 1.1em;
  text-align: left;
  }
</style>
