<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import ProjectCard from '@/components/ProjectCard.vue'; // Replace with actual import
import type { ProjectSchema } from '@/composables/firebase/ProjectsSchema/ProjectSchemas';
import { readProjects } from '@/composables/firebase/ProjectsSchema/ProjectOps';

export default defineComponent({
  name: 'ProjectsView',
  components: { ProjectCard },
  setup() {
    
    const projects = ref<ProjectSchema[]>();
    const getProjects = async () => {
      projects.value = await readProjects();
      console.log(projects.value);
    };

    onMounted(async () => {
      await getProjects();
    });

    return { projects };
}});
</script>

<template>
    <main class="projects-main">
      <div class="projects-wrapper">
        <h1>My Projects</h1>
        <div class="projects-grid">
          <ProjectCard v-for="project in projects" :key="project.projectTitle" :project="project" />
        </div>
      </div>
    </main>
  </template>
  
  <style scoped>
  .projects-main {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 90vh;
    background-color: var(--primary-bg);
  }
  
  .projects-wrapper {
    max-width: 1200px;
    width: 100%;
    margin: auto;
    padding: 2rem;
    text-align: center;
    border-radius: 20px;
    box-shadow: 0px 0px 15px 5px var(--shadow-color);
    background: var(--secondary-bg);
  }
  
  h1 {
    color: var(--white);
  }
  
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 16px;
    padding: 20px;
  }
  </style>
  