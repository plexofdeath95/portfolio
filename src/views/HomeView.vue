<script setup lang="ts">
import { ref, onMounted } from 'vue'
const bgImage = '/bg_blurs.png'
const lines = [
  '$ npm install vue@next',
  '$ vue create my-project',
  '> Invoking generators...',
  '> Installing additional dependencies...',
  '✔ Project successfully created!'
]
const visibleLines = ref<string[]>([])

let lineIndex = 0
let charIndex = 0

const addChar = () => {
  if (lineIndex < lines.length) {
    const line = lines[lineIndex]
    if (charIndex < line.length) {
      if (!visibleLines.value[lineIndex]) visibleLines.value[lineIndex] = ''
      visibleLines.value[lineIndex] += line[charIndex]
      charIndex++
    } else {
      lineIndex++
      charIndex = 0
    }
  }
}

onMounted(() => {
  const intervalId = setInterval(() => {
    addChar()
    if (lineIndex >= lines.length) clearInterval(intervalId)
  }, 25)
})
</script>

<template>
  <main>
    <div class="wrapper">
      <div class="text">
        <p>Hi all. I am</p>
        <h1>Hassan Farhat</h1>
        <h2>> Full-stack developer</h2>

        <p>
          I am a full-stack developer with a passion for building web applications. I have
          experience working with multiple technologies across various disciplines.
        </p>
      </div>

      <div class="contentTwo">
        <img :src="bgImage" alt="Background" />
        <div class="overlay">
          <div class="terminal">
            <div class="terminal-header">Hassan's Terminal</div>
            <!-- Added this line for the terminal header -->
            <transition-group name="typewriter" tag="pre">
              <div v-for="(line, index) in visibleLines" :key="index" class="line">{{ line }}</div>
            </transition-group>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  margin: 0;
  padding: 0;
  background-color: var(--primary-bg);
}

.wrapper {
  max-width: 1280px;
  min-width: 50vw;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Mobile View */
@media (max-width: 767px) {
  .wrapper {
    flex-direction: column;
    min-width: 100%;
  }

  .text, .contentTwo {
    margin-bottom: 1rem;
  }
}

.text, .contentTwo {
  flex: 1;
  position: relative;
}

.contentTwo img {
  width: 100%;
  display: block;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.terminal {
  background-color: var(--primary-bg);
  color: var(--primary-text);
  padding: 1rem;
  border-radius: 8px;
  overflow: auto;
  font-family: 'Fira Code', monospace;
  width: 80%;
  border: 1px solid var(--primary-text);
}

.terminal-header {
  color: var(--accent-color);
  font-weight: bold;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--primary-text);
}

.typewriter-enter-active, .typewriter-leave-active {
  transition: opacity 0.5s;
}
.typewriter-enter, .typewriter-leave-to {
  opacity: 0;
}

</style>

