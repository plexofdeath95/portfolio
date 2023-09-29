<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import FooterBar from './components/FooterBar.vue';
import { onBeforeMount } from 'vue';


</script>

<template>
  <NavBar />
  <header>
    <div class="wrapper">

    </div>
  </header>

  <RouterView />
  <FooterBar />
</template>

<style scoped>

</style>
