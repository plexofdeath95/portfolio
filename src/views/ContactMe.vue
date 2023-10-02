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
    const submitted = ref(false); // ref to determine whether the form has been submitted
    const error = ref(''); // ref to store error messages

    const formattedJSON = computed(() => JSON.stringify(form.value, null, 2))
    const formattedJSONLines = computed(() => formattedJSON.value.split('\n'))

    const submitForm = () => {
      if(!form.value.name || !form.value.email || !form.value.message) {
        error.value = 'All fields are required!';
        return;
      }
      // Handle form submission
      // After successful submission
      submitted.value = true; // set submitted to true after successful form submission
      error.value = ''; // clear error messages after successful form submission
    }

    return { form, formattedJSONLines, submitForm, submitted, error }
  }
})
</script>
<template>
  <main class="contact-main">
    <div class="contact-wrapper">
      <h1>Contact Me</h1>
      <div v-if="!submitted" class="contact-section">
        <div class="left">
          <form @submit.prevent="submitForm">
            <label for="name">Name:</label>
            <input v-model="form.name" type="text" id="name" required />

            <label for="email">Email:</label>
            <input v-model="form.email" type="email" id="email" required />

            <label for="message">Message:</label>
            <textarea v-model="form.message" id="message" required></textarea>
            
            <span v-if="error">{{ error }}</span> <!-- Display error message if any -->
            
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
      <div v-if="submitted">
        <p>Thank you for contacting me. I will get back to you soon!</p>
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
  background-color: var(--primary-bg);
}

.contact-wrapper {
  max-width: 800px;
  width: 100%;
  margin: auto;
  text-align: center;
  border-radius: 20px;
  box-shadow: 0px 0px 15px 5px var(--shadow-color);
  background: var(--white);
}

h1 {
  color: var(--primary-bg);
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
    min-width: 90%;
  }
}

.left, .right {
  flex: 1;
  padding: 20px;
  border-radius: 8px;
  background-color: #f9f9f9; /* You might want to consider adding a new variable for this color */
  margin:20px
}

.right {
  background-color: var(--primary-bg);
  color: var(--accent-color);
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
  color: #8fa6b4; /* You might want to consider adding a new variable for this color */
}

label, input, textarea, button {
  display: block;
  width: 100%;
  margin-bottom: 20px;
  min-height: 30px;
  font-size: 16px;
  border-radius: 8px;
  resize: none;
}

button {
  cursor: pointer;
  background-color: var(--accent-color);
  color: var(--white);
  border: none;
}

button:hover {
  background-color: #1aa367; /* You might want to consider adding a new variable for this color */
}

pre {
  margin: 0;
  font-family: 'Fira Code', monospace;
  display: flex;
  white-space: pre-wrap;
}
</style>
