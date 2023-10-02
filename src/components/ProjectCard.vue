<template>
    <div class="project-card">
      <img :src="project.projectImgUrl" :alt="project.projectTitle" class="project-image"/>
      <h2>{{ project.projectTitle }}</h2>
      <p>{{ project.projectDescription }}</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, type PropType } from 'vue';
  import { type ProjectSchema } from '@/composables/firebaseComposables/Firestore/ProjectsSchema/ProjectSchemas';
  
  export default defineComponent({
    props: {
      project: {
        type: Object as PropType<ProjectSchema>,
        required: true,
      },
    },
  });
  </script>
  
  <style scoped>
  .project-card {
    background-color: var(--white);
    padding: 10px;
    border-radius: 8px;
    /* other styles as needed */
  }

  .project-image
  {
    width:100%;
    border-radius: 8px;
  }
  </style>
  