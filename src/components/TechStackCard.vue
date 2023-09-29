<template>
    <div class="tech-stack-card">
      <div class="tech-stack-name">{{ stackName }}</div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  const props = defineProps({ stackName: String });
  </script>
  
  <style scoped>
  .tech-stack-card {
    background-color: var(--button-bg);
    border-radius: 8px;
    box-shadow: 0 4px 6px var(--shadow-color);
    padding: 16px;
    text-align: center;
    transition: 0.3s;
    color: var(--button-text);
  }
  
  .tech-stack-card:hover {
    transform: translateY(-5px);
  }
  
  .tech-stack-name {
    font-size: 18px;
    font-weight: 600;
    color: var(--button-text); 
  }
</style>
