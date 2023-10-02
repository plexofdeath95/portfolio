<template>
  <footer class="footer" aria-label="Footer Navigation">
    <div class="wrapper">
      <a href="https://www.facebook.com/your_facebook_username" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <span class="material-icons">facebook</span>
      </a>
      <a href="mailto:hassanfarhatcons@gmail.com" aria-label="Email">
        <span class="material-icons">email</span> hassanfarhatcons@gmail.com
      </a>
      <div class="copyright">
        © Hassan Farhat 2023
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
.footer {
  background-color: var(--primary-bg);
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 100;
  border-top: 1px solid var(--border-color);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60px;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
  box-sizing: border-box;
  width: 80%; /* Control the width of the wrapper */
}

a, .copyright {
  color: var(--white);
  text-decoration: none;
  display: flex;
  align-items: center;
}

.material-icons {
  font-size: 24px;
}

@media (max-width: 600px) { .wrapper {
    flex-direction: column;
    align-items: center;
  }

  .wrapper > * {
    margin-bottom: 1rem;
  }

  .wrapper > *:last-child {
    margin-bottom: 0;
  }
}
</style>
