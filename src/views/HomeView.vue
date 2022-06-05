<template>
  <div class="home">
    <Header />
    <img  class="bandera" alt="Vue logo" src="../assets/bandera.jpg">
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  name: 'HomeView',
  components: {
    Header
  }
}
</script>

<style scoped lang="scss">


.bandera{
  width: 100%;
  top:0
}
</style>