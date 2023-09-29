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
  '/contact': 2,
  '/Projects': 3
}

const routeText = {
  '/': '_hello',
  '/about': '_about-me',
  '/contact': '_contact-me',
  '/Projects': '_Projects'
}

const routeLink = {
  '/': '/',
  '/about': '/about',
  '/contact': '/contact',
  '/Projects': '/Projects'
}

const routeSelected = computed(() => {
  return {
    '/': currentRoute.value === '/',
    '/about': currentRoute.value === '/about',
    '/contact': currentRoute.value === '/contact',
    '/Projects': currentRoute.value === '/Projects'
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

      <ItemLinkComponent
        :link="routeLink['/Projects']"
        :text="routeText['/Projects']"
        :selected="routeSelected['/Projects']"
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

