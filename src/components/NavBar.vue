<script lang="ts">
import { ref, onMounted, onBeforeUnmount, defineComponent, computed, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ItemLinkComponent from './ItemLinkComponent.vue'
import { getCurrentUser, logoutUser } from '@/composables/firebaseComposables/Authentication/AuthFunctions'
import type { UserSchema } from '@/composables/firebaseComposables/Firestore/UserSchema/UserDataSchema'

export default defineComponent({
  name: 'NavBar',
  components: { ItemLinkComponent },
  setup() {
    const route = useRoute()
    const router = useRouter();
    const currentRoute = ref(route.path)
    const currentUser = ref<UserSchema | null>(null)
    const isMobile = ref(window.innerWidth <= 768)
    const showMenu = ref(false)

    onMounted(async () => {
      currentUser.value = await getCurrentUser()
      window.addEventListener('resize', updateMobileView)
    })

    const updateMobileView = () => {
      isMobile.value = window.innerWidth <= 768
    }

    onBeforeUnmount(() => {
      window.removeEventListener('resize', updateMobileView)
    })

    const toggleMenu = () => {
      showMenu.value = !showMenu.value
    }

    watchEffect(async () => {
      currentRoute.value = route.path
      currentUser.value = await getCurrentUser()
    })

    const routeText = {
      '/': '_hello',
      '/about': '_about-me',
      '/contact': '_contact-me',
      '/Projects': '_projects',
      '/resume': '_resume',
      '/blogs': '_blogs',
      '/auth': '_login'
    }

    const routeLink = {
      '/': '/',
      '/about': '/about',
      '/contact': '/contact',
      '/Projects': '/Projects',
      '/resume': '/resume',
      '/blogs': '/blogs',
      '/auth': '/auth'
    }

    const routeSelected = computed(() => {
      return {
        '/': currentRoute.value === '/',
        '/about': currentRoute.value === '/about',
        '/contact': currentRoute.value === '/contact',
        '/Projects': currentRoute.value === '/Projects',
        '/resume': currentRoute.value === '/resume',
        '/blogs': currentRoute.value === '/blogs',
        '/auth': currentRoute.value === '/auth'
      }
    })

    const logOut = async () => {
      await logoutUser()
      currentUser.value = null
      router.push('/')
    }
    
    return { 
      routeText, 
      routeLink, 
      routeSelected, 
      currentUser, 
      logOut, 
      isMobile, 
      toggleMenu, 
      showMenu 
    }
  }
})
</script>

<template>
  <div class="navbar">
    <div v-if="isMobile" @click="toggleMenu" class="menu-toggle">
      <span class="material-icons">menu</span>
    </div>
    <div class="wrapper" :class="{'show-menu': showMenu}">
      
      <ItemLinkComponent
        :link="routeLink['/']"
        :text="routeText['/']"
        :selected="routeSelected['/']"
        @item-clicked="toggleMenu"
      />
      <ItemLinkComponent
        :link="routeLink['/resume']"
        :text="routeText['/resume']"
        :selected="routeSelected['/resume']"
        @item-clicked="toggleMenu"
      />
      <ItemLinkComponent
        :link="routeLink['/Projects']"
        :text="routeText['/Projects']"
        :selected="routeSelected['/Projects']"
        @item-clicked="toggleMenu"
      />

      <ItemLinkComponent
        :link="routeLink['/blogs']"
        :text="routeText['/blogs']"
        :selected="routeSelected['/blogs']"
        @item-clicked="toggleMenu"
      />
      <ItemLinkComponent
        :link="routeLink['/about']"
        :text="routeText['/about']"
        :selected="routeSelected['/about']"
        @item-clicked="toggleMenu"
      />

      <ItemLinkComponent
        :link="routeLink['/contact']"
        :text="routeText['/contact']"
        :selected="routeSelected['/contact']"
        @item-clicked="toggleMenu"
      />
      
  



      <div v-if="currentUser">
        <button @click="logOut">Logout</button>
      </div>
      <ItemLinkComponent v-else
        :link="routeLink['/auth']"
        :text="routeText['/auth']"
        :selected="routeSelected['/auth']"
        @item-clicked="toggleMenu"
      />
    </div>
  </div>
</template>



<style scoped>
.navbar {
  background-color: var(--primary-bg);
  height: 56px;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
}

.wrapper {
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: space-around;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--primary-bg);
  padding-top: 56px; /* height of navbar */
  width: 100%;
  height: 100%;
  border-bottom: 1px solid var(--border-color);
}

/* Default styles for larger screens */
@media (min-width: 769px) {
  .wrapper {
    flex-direction: row; /* Horizontal bar */
    align-items: center;
    justify-content: space-between;
    transform: translateX(0); /* Always visible */
    position: relative; /* Not fixed */
    padding-top: 0; /* No padding top */
    height: 56px; /* height of navbar */
    width: auto;
    z-index: 200;
  }

  .show-menu {
    transform: translateX(0);
    height: auto;
  }
}

/* Smaller screens */
@media (max-width: 768px) {
  .wrapper {
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    transform: translateX(-100%);
    position: fixed;
    top: 0;
    left: 0;
    background-color: var(--primary-bg);
    padding-top: 56px; 
    width: 100%;
    height: 100%;
    z-index: 200;
  }

  .show-menu {
    transform: translateX(0);
    height:94vh;
  }
}

button {
  background-color: var(--primary-bg);
  color: var(--white);
  border: none;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: var(--accent-color);
}

.menu-toggle {
  cursor: pointer;
  z-index: 201;
  padding: 15px;
  color: var(--white);
  border: none;
  background-color: var(--primary-bg);
}
</style>


