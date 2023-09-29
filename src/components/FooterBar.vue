<template>
  <footer class="footer" aria-label="Footer Navigation">
    <div class="wrapper">
      <a href="https://www.facebook.com/your_facebook_username" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <span class="material-icons">facebook</span>
      </a>
      <a href="https://www.twitter.com/your_twitter_username" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
        <span class="material-icons">twitter</span>
      </a>
      <a href="https://www.linkedin.com/in/your_linkedin_username" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <span class="material-icons">linkedin</span>
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts">

</script>

<style scoped>
.footer {
  background-color: var(--primary-bg);
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
  border-top: 1px solid var(--border-color);
  display: flex;
  justify-content: center;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
  box-sizing: border-box;
}

a {
  color: var(--white); /* using white variable instead of #fff */
  text-decoration: none;
}

.material-icons {
  font-size: 24px;
}

@media (max-width: 600px) {
  .wrapper {
    align-items: center;
    justify-content: space-around;
  }
  
  a {
    margin-bottom: 0.5rem;
  }
}

</style>
