<script lang="ts">
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'ContactView',
  setup() {
    const form = ref({
      name: '',
      email: '',
      message: ''
    })

    const formattedJSON = computed(() => JSON.stringify(form.value, null, 2))
    const formattedJSONLines = computed(() => formattedJSON.value.split('\n'))

    const submitForm = () => {
      // Handle form submission
    }

    return { form, formattedJSONLines, submitForm }
  }
})
</script>

<template>
  <main class="contact-main">
    <div class="contact-wrapper">
      <h1>Contact Me</h1>
      <div class="contact-section">
        <div class="left">
          <form @submit.prevent="submitForm">
            <label for="name">Name:</label>
            <input v-model="form.name" type="text" id="name" required />

            <label for="email">Email:</label>
            <input v-model="form.email" type="email" id="email" required />

            <label for="message">Message:</label>
            <textarea v-model="form.message" id="message" required></textarea>

            <button type="submit">Send</button>
          </form>
        </div>
        <div class="right">
          <div class="json-container">
            <pre v-for="(line, index) in formattedJSONLines" :key="index">
              <span class="line-number">{{ index + 1 }}</span> {{ line }}
            </pre>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.contact-main {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  background-color: #011627;
}

.contact-wrapper {
  max-width: 800px;
  width: 100%;
  margin: auto;
  padding: 2rem;
  text-align: center;
  border-radius: 20px;
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.2);
  background: #fff;
}

h1 {
  color: #011627;
}

.contact-section {
  display: flex;
  margin-top: 20px;
}

@media (max-width: 767px) {
  .contact-section {
    flex-direction: column;
  }
  .contact-wrapper {
    min-width: 100%;
  }
}

.left,
.right {
  flex: 1;
  padding: 20px;
  border-radius: 8px;
  background-color: #f9f9f9;
  margin:20px
}

.right {
  background-color: #011627;
  color: #21c978;
  overflow-y: auto;
  font-family: 'Fira Code', monospace;
  align-items: center;
  flex-direction: column;
}

.json-container {
  text-align: left;
  overflow-y: auto;
  width: 100%;
}

.line-number {
  display: inline-block;
  min-width: 20px;
  color: #8fa6b4;
}
label,
input,
textarea,
button {
  display: block;
  width: 100%;
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
  border-radius: 8px;
}

button {
  cursor: pointer;
  background-color: #21c978;
  color: #fff;
  border: none;
}

button:hover {
  background-color: #1aa367;
}

pre {
  margin: 0;
  font-family: 'Fira Code', monospace;
  display: flex;
  white-space: pre-wrap;
}
</style>
