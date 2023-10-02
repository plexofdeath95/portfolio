<template>
    <div class="create-blog-main">
      <div class="create-blog-wrapper">
        <h1>Create Blog</h1>
        <div class="create-blog-section">
          <div class="left">
            <form @submit.prevent="handleSubmit">
              <label for="title">Title:</label>
              <input v-model="blog.title" id="title" required />
    
              <label for="subtitle">Subtitle:</label>
              <input v-model="blog.subtitle" id="subtitle" />
              <label for="imageURL">Image URL:</label>
             <input v-model="blog.imageURL" id="imageURL" />
              <label for="content">Content:</label>
              <textarea v-model="blog.content" id="content" required></textarea>
    
              <button type="submit">Create Blog</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script lang="ts">
  import { createBlog } from '@/composables/firebaseComposables/Firestore/BlogSchema/BlogOps';
import type { BlogsSchema } from '@/composables/firebaseComposables/Firestore/BlogSchema/BlogsSchema';
import { Timestamp } from 'firebase/firestore';
import { defineComponent, ref } from 'vue';
  import { useRouter } from 'vue-router';
  export default defineComponent({
    name: 'CreateBlog',
    setup() {
      const blog = ref<BlogsSchema>({
        title: '',
        subtitle: '',
        content: '',
        imageURL: '',
        dateCreated: Timestamp.now(),
        dateModified: Timestamp.now(),
        id: ''
      });

      const router = useRouter();
  
      const handleSubmit = async () => {
        await createBlog(blog.value);
        router.push('/blogs');
      };
  
      return {
        blog,
        handleSubmit
      };
    }
  });
  </script>
  

  <style scoped>
.create-blog-main {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  background-color: var(--primary-bg);
}

.create-blog-wrapper {
  max-width: 800px;
  width: 100%;
  margin: auto;
  padding: 2rem;
  text-align: center;
  border-radius: 20px;
  box-shadow: 0px 0px 15px 5px var(--shadow-color);
  background: var(--white);
}

h1 {
  color: var(--primary-bg);
}

.create-blog-section {
  display: flex;
  margin-top: 20px;
}

@media (max-width: 767px) {
  .create-blog-section {
    flex-direction: column;
  }
  .create-blog-wrapper {
    min-width: 100%;
  }
}

.left, .right {
  flex: 1;
  padding: 20px;
  border-radius: 8px;
  background-color: #f9f9f9;
  margin:20px
}

label, input, textarea, button {
  display: block;
  width: 90%;
  margin-bottom: 20px;
  margin: auto auto;
  padding: 10px;
  font-size: 16px;
  border-radius: 8px;
}

textarea {
    resize: none;
    min-height: 200px;
}

form
{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
button {
  cursor: pointer;
  background-color: var(--accent-color);
  color: var(--white);
  border: none;
  margin: 20px
}

button:hover {
  background-color: #1aa367;
}
</style>
