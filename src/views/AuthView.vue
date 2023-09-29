<template>
  <div class="auth-main">
    <div class="auth-wrapper">
      <h1 v-if="isLogin">Login</h1>
      <h1 v-else>Register</h1>

      <form @submit.prevent="submit" class="auth-form">
        <label for="email">Email:</label>
        <input v-model.trim="form.email" type="email" id="email" required />
        <span v-if="!isEmailValid">Invalid email</span>

        <label for="password">Password:</label>
        <input v-model="form.password" type="password" id="password" required />

        <label v-if="!isLogin" for="displayName">Display Name:</label>
        <input v-if="!isLogin" v-model.trim="form.userDisplayName" type="text" id="displayName" required />

        <label v-if="!isLogin" for="userType">User Type:</label>
        <select v-if="!isLogin" v-model="userType" id="userType">
          <option :value="UserType.user">User</option>
          <option :value="UserType.admin">Admin</option>
        </select>

        <button type="submit" :disabled="!isFormValid">{{ isLogin ? 'Login' : 'Register' }}</button>
      </form>

      <button @click="toggleView">Switch to {{ isLogin ? 'Register' : 'Login' }}</button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue'
import {
  UserType,
  type UserSchema
} from '@/composables/firebaseComposables/Firestore/UserSchema/UserDataSchema'
import {
  getCurrentUser,
  loginUser,
  registerUser
} from '@/composables/firebaseComposables/Authentication/AuthFunctions'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'AuthView',
  setup() {
    const isLogin = ref(true)
    const currentUser = ref<UserSchema | null>()
    const router = useRouter()
    const form = ref({
      email: '',
      password: '',
      userDisplayName: '',
      userType: UserType.user // Default to UserType.user, adjust as necessary
    })

    const userType = computed({
      get: () => UserType[form.value.userType],
      set: (value) => {
        form.value.userType = UserType[value as keyof typeof UserType]
      }
    })

    onMounted(async () => {
      try {
        const user = await getCurrentUser()
        currentUser.value = user
      } catch (error) {
        console.error('Error getting current user:', error)
      }
    })

    const isEmailValid = computed(() => {
      const re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
      return re.test(form.value.email)
    })

    const isFormValid = computed(() => isEmailValid.value && form.value.password)

    const submit = async () => {
      if (!isFormValid.value) return

      try {
        if (isLogin.value) {
          const userData = await loginUser(form.value.email, form.value.password)
          router.push('/')
          console.log('Logged in user data:', userData)
        } else {
          const userData: UserSchema = {
            userDisplayName: form.value.userDisplayName,
            userEmail: form.value.email,
            userUid: '', // This will be set when createUser is called
            userType: form.value.userType
          }
          const registeredUser = await registerUser(form.value.email, form.value.password, userData)
          console.log('Registered user data:', registeredUser)
          //log them in
          await loginUser(form.value.email, form.value.password)
          router.push('/')
        }
      } catch (error) {
        console.error('Auth Error', error)
      }
    }

    const toggleView = () => {
      isLogin.value = !isLogin.value
    }

    return { form, isLogin, submit, isEmailValid, isFormValid, toggleView, userType, UserType }

  }
})
</script>

<style scoped>
.auth-main {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  background-color: var(--primary-bg);
}

.auth-wrapper {
  max-width: 400px;
  width: 100%;
  margin: auto;
  padding: 2rem;
  text-align: center;
  border-radius: 20px;
  box-shadow: 0px 0px 15px 5px var(--shadow-color);
  background: var(--white);
}

h1,
label,
span {
  color: var(--primary-bg);
}

.auth-form {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

input,
button {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid var(--primary-bg);
  border-radius: 8px;
  background-color: var(--white);
  color: var(--primary-bg);
  transition:
    background-color 0.2s ease-in-out,
    color 0.2s ease-in-out;
}

input:focus,
button:hover {
  background-color: var(--primary-bg);
  color: var(--white);
}

button {
  cursor: pointer;
  background-color: var(--accent-color);
}

@media (max-width: 767px) {
  .auth-wrapper {
    padding: 1rem;
  }
}
</style>
