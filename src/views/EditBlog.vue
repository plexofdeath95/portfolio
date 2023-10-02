<script lang="ts">
import { defineComponent, ref, onBeforeMount } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { updateBlog, readBlog } from '@/composables/firebaseComposables/Firestore/BlogSchema/BlogOps';
import type { BlogsSchema } from '@/composables/firebaseComposables/Firestore/BlogSchema/BlogsSchema';
import { Timestamp } from 'firebase/firestore';

export default defineComponent({
    name: 'EditBlog',
    setup() {
      const route = useRoute();
      const blog = ref<BlogsSchema>({
        title: '',
        subtitle: '',
        content: '',
        imageURL: '',
        dateCreated: Timestamp.now(),
        dateModified: Timestamp.now(),
        id: ''
      });
      
      onBeforeMount(async () => {
        const id = route.params.id as string;
        const existingBlog = await readBlog(id);
        blog.value = { ...existingBlog, id };
      });

      const router = useRouter();
  
      const handleSubmit = async () => {
        await updateBlog(blog.value.id, blog.value);
        router.push('/blogs');
      };
  
      return {
        blog,
        handleSubmit
      };
    }
});
</script>


<template>
    <div class="edit-blog-main">
      <div class="edit-blog-wrapper">
        <h1>Edit Blog</h1>
        <div class="edit-blog-section">
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
              
              <button type="submit">Update Blog</button>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>
<style scoped>
.edit-blog-main {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  background-color: var(--primary-bg);
}

.edit-blog-wrapper {
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

.edit-blog-section {
  display: flex;
  margin-top: 20px;
}

@media (max-width: 767px) {
  .edit-blog-section {
    flex-direction: column;
  }
  .edit-blog-wrapper {
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

form {
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
