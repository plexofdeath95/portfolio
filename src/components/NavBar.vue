<script lang="ts">
import { watchEffect, ref, computed, defineComponent, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import ItemLinkComponent from './ItemLinkComponent.vue'
import { getCurrentUser, logoutUser } from '@/composables/firebaseComposables/Authentication/AuthFunctions'
import type { UserSchema } from '@/composables/firebaseComposables/Firestore/UserSchema/UserDataSchema'

export default defineComponent({
  name: 'NavBar',
  components: { ItemLinkComponent },
  setup() {
    const route = useRoute()
    const currentRoute = ref(route.path)
    const currentUser = ref<UserSchema| null> (null)
    onMounted(async () => {
      currentUser.value= await getCurrentUser()
    })

    // Update currentRoute on route change
    watchEffect(async () => {
      currentRoute.value = route.path
      currentUser.value = await getCurrentUser()
    })

    const routeText = {
      '/': '_hello',
      '/about': '_about-me',
      '/contact': '_contact-me',
      '/Projects': '_projects',
      '/auth': '_login'
    }

    const routeLink = {
      '/': '/',
      '/about': '/about',
      '/contact': '/contact',
      '/Projects': '/Projects',
      '/auth': '/auth'
    }

    const routeSelected = computed(() => {
      return {
        '/': currentRoute.value === '/',
        '/about': currentRoute.value === '/about',
        '/contact': currentRoute.value === '/contact',
        '/Projects': currentRoute.value === '/Projects',
        '/auth': currentRoute.value === '/auth'
      }
    })

    const logOut = async () => {
      await logoutUser()
      currentUser.value = null
    }
    return { routeText, routeLink, routeSelected, currentUser, logOut }
  }
})

</script>

<template>
  <div class="navbar">
    <div class="wrapper">
      <!-- Other links remain unchanged -->
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
        :link="routeLink['/Projects']"
        :text="routeText['/Projects']"
        :selected="routeSelected['/Projects']"
      />
      <ItemLinkComponent
        :link="routeLink['/contact']"
        :text="routeText['/contact']"
        :selected="routeSelected['/contact']"
      />

      <!-- Conditional rendering of Login link or Logout button -->
      <div v-if="currentUser">
        <button @click="logOut">Logout</button>
      </div>
      <ItemLinkComponent v-else
        :link="routeLink['/auth']"
        :text="routeText['/auth']"
        :selected="routeSelected['/auth']"
      />
    </div>
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
</style>

