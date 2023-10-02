<template>
  <footer class="footer" aria-label="Footer Navigation">
    <div class="wrapper">
      <a href="https://www.facebook.com/your_facebook_username" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <span class="material-icons">facebook</span>
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
  bottom: 0;
  left: 0;
  z-index: 100;
  border-top: 1px solid var(--border-color);
  display: flex;
  justify-content: center;
  align-items: center; /* Added to vertically center the content */
  min-height: 60px; /* Optional: You can set a min-height for the footer */
}

.wrapper {
  display: flex;
  align-items: center; /* This will center align the links vertically */
  justify-content: space-around;
  padding: 1rem;
  box-sizing: border-box;
}

a {
  color: var(--white);
  text-decoration: none;
  display: flex;
  align-items: center; /* This keeps the span centered vertically inside a */
}

.material-icons {
  font-size: 24px;
}

@media (max-width: 600px) {
  .wrapper {
    flex-direction: column; /* Stack links vertically on small screens */
  }
}


</style>
