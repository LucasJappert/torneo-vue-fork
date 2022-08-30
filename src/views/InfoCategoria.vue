<template>
    <div class="sub-container">
         <div class="Categoria">
          Categorías:
        </div>
        <TablasInfo />
    </div>
</template>

<script>
import TablasInfo from "../components/TablasInfo.vue";
export default {
  name: 'HomeView',
  components: {
    TablasInfo
  }
}


</script>

<style scoped lang="scss">


.Categoria{
  font-size: 1.1em;
  padding: 10px;
  font-weight: bold;
  text-align: left;

  }


</style>
