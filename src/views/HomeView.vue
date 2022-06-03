<template>
  <div class="home">
    <Header />
    <img alt="Vue logo" src="../assets/logo.png">
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
