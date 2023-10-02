<template>
    <main class="blogs-main">
      <div class="blogs-wrapper">
        <h1>Posts</h1>
        <div v-if="admin" class="add-post">
        <button @click="addPost">Add Post</button>
      </div>
        <div class="blogs-grid">
          <BlogCard v-for="blog in blogs" :key="blog.title" :blog="blog" :admin="admin" @delete-blog="refreshBlogs"/>
        </div>
      </div>
    </main>
  </template>
  
  <script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';
  import BlogCard from '@/components/BlogCard.vue';
  import type { BlogsSchema } from '@/composables/firebaseComposables/Firestore/BlogSchema/BlogsSchema'; 
  import { readBlogs } from '@/composables/firebaseComposables/Firestore/BlogSchema/BlogOps'; 

import { useRouter } from 'vue-router';
  
  export default defineComponent({
    name: 'BlogView',
    components: { BlogCard },
    setup() {
      const blogs = ref<BlogsSchema[]>();
      const admin = ref<boolean>(false);
      const router = useRouter();
      const getBlogs = async () => {
        blogs.value = await readBlogs();
        console.log(blogs.value);
      };
  
      onMounted(async () => {
        await getBlogs();
        const userItem = localStorage.getItem('user');
        const data = userItem ? JSON.parse(userItem) : null;

        if(data)
        {
          admin.value = data.userType == 'admin';
        }
      });

      const addPost = () => {
        console.log('add post');
        router.push('/blogs/create')
      }

      const refreshBlogs = async () => {
        await getBlogs();
      }
  
      return { blogs,admin, addPost, refreshBlogs };
    },
  });
  </script>
  
  <style scoped>
  .blogs-main {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 90vh;
    background-color: var(--primary-bg);
    cursor:pointer;
  }
  

  .blogs-wrapper {
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
  
  .blogs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 16px;
    padding: 20px;
  }
  </style>
  