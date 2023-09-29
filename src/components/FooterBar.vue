<template>
    <footer class="footer">
      <div class="wrapper">
        <a href="your_facebook_link" target="_blank" rel="noopener noreferrer">
          <span class="material-icons">facebook</span>
        </a>
        <a href="your_twitter_link" target="_blank" rel="noopener noreferrer">
          <span class="material-icons">twitter</span>
        </a>
        <a href="your_linkedin_link" target="_blank" rel="noopener noreferrer">
          <span class="material-icons">linkedin</span>
        </a>
      </div>
    </footer>
  </template>
  
  <script setup lang="ts">
  // You can add your setup logic here if needed
  </script>
  
  <style scoped>
  .footer {
    background-color: #011627;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;
    border-top: 1px solid #1e2d3d;
    display: flex;
    justify-content: center;
  }
  
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 1rem;
  }
  
  a {
    color: #fff;
    text-decoration: none;
  }
  
  .material-icons {
    font-size: 24px;
  }
  </style>
  