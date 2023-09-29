<script setup lang="ts">
import { watchEffect, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import ItemLinkComponent from './ItemLinkComponent.vue'

const route = useRoute()
const currentRoute = ref(route.path)

// Update currentRoute on route change
watchEffect(() => {
  currentRoute.value = route.path
})

const routeIndex = {
  '/': 0,
  '/about': 1,
  '/contact': 2
}

const routeText = {
  '/': '_hello',
  '/about': '_about-me',
  '/contact': '_contact-me'
}

const routeLink = {
  '/': '/',
  '/about': '/about',
  '/contact': '/contact'
}

const routeSelected = computed(() => {
  return {
    '/': currentRoute.value === '/',
    '/about': currentRoute.value === '/about',
    '/contact': currentRoute.value === '/contact'
  }
})
</script>

<template>
  <div class="navbar">
    <div class="wrapper">
      <ItemLinkComponent
        :link="routeLink['/']"
        :text="routeText['/']"
        :selected="routeSelected['/']"
      />
      <ItemLinkComponent
        :link="routeLink['/about']"
        :text="routeText['/about']"
        :selected="routeSelected['/about']"
      />
      <ItemLinkComponent
        :link="routeLink['/contact']"
        :text="routeText['/contact']"
        :selected="routeSelected['/contact']"
      />
    </div>

    <div class="contact"></div>
  </div>
</template>

<style scoped>
.navbar {
  background-color: var(--primary-bg);
  height: 56px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  border: 1px solid var(--border-color);
  display: flex;
  justify-content: space-around;
}

.wrapper {
  width: 100%;
  height: 100%;
  margin: auto auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-left: 1px solid var(--border-color);
  margin: 0 auto;
}
</style>

