<script lang="ts">
import { defineComponent, ref } from 'vue';
import TechStackCard from '@/components/TechStackCard.vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'AboutView',
  components: { TechStackCard },
  setup() {
    const router = useRouter();
    const techStacks = ref([
      'Unity',
      'Unreal',
      'Vue',
      'React',
      'Python',
      'C#',
      'C++',
      'Java',
    ]);

    const takeToContact = () => {
      router.push('/contact');
    };

    return { techStacks, takeToContact };
  }
});
</script>

<template>
  <main class="about-main">
    <div class="about-wrapper">
      <h1>About Me</h1>
      <p>//I am Hassan Farhat, a full-stack developer with a passion <br/> //for building anything technology...</p>
      <div class="tech-stack-section">
        <h2>My Tech Stack:</h2>
        <div class="tech-stack-grid">
          <TechStackCard v-for="tech in techStacks" :key="tech" :stackName="tech" />
        </div>
        <button class="btn-contact" @click="takeToContact">
          Contact Me
        </button>
      </div>
    </div>
  </main>
</template>



  
<style scoped>
.about-main {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  background-color: var(--primary-bg);
}

.about-wrapper {
  max-width: 800px;
  width: 100%;
  margin: auto;
  padding: 2rem;
  text-align: center;
  border-radius: 20px;
  box-shadow: 0px 0px 15px 5px var(--shadow-color);
  background: url('/bg_grad.png') no-repeat center center;
  background-size: cover;
}

@media (max-width: 767px) {
  .about-wrapper {
    padding: 1rem;
  }
  .tech-stack-grid {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    padding: 20px;
  }
}

h1, h2, p {
  color: var(--white);
}

.tech-stack-section {
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
}

.tech-stack-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 16px;
  padding: 40px;
  background-color: var(--secondary-bg);
  border-radius: 20px;
}

.btn-contact {
  background-color: transparent;
  border: 1px solid var(--white);
  border-radius: 8px;
  color: var(--white);
  padding: 8px 16px;
  font-size: 16px;
  margin-top: 20px;
  transition: transform .2s ease-in-out;
}

.btn-contact:hover {
  transform: scale(1.1);
}
</style>
