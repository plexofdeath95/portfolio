<script lang="ts">
import { defineComponent, onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';
import {readBlog} from '@/composables/firebaseComposables/Firestore/BlogSchema/BlogOps';
import type { BlogsSchema } from '@/composables/firebaseComposables/Firestore/BlogSchema/BlogsSchema';
import { Timestamp } from 'firebase/firestore'

export default defineComponent({
name: 'BlogEntryView',
setup() {
    const route = useRoute();
    console.log(route.params.id);
    const blog = ref<BlogsSchema | null>();

    onBeforeMount(async () => {
        blog.value = await readBlog(route.params.id as string);
        blog.value.content = formatBlogWithLineBreaks(blog.value);
        
    });

    const formatBlogWithLineBreaks = (blog: BlogsSchema) => {
        return blog.content.replace(/\n/g, '<br />');
    };

    const formatDate = (timestamp: Timestamp) => {
            const date = timestamp.toDate();
            return date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            });
        };

    return {
        blog,
        formatDate
    }

}})

</script>

<template>
    <div v-if="blog" class="blog-entry">
        <img :src="blog.imageURL" alt="Blog Image" class="blog-image"/>
        <h2 class="blog-title">{{ blog.title }}</h2>
        <h3 class="blog-subtitle">{{ blog.subtitle }}</h3>
        <div class="blog-content" v-html="blog.content"></div>
        <div class="blog-dates">
            <p><strong>Created:</strong> {{ formatDate(blog.dateCreated) }}</p>
            <p><strong>Modified:</strong> {{ formatDate(blog.dateModified) }}</p>
        </div>
    </div>
    <div v-else>
        <p>Loading...</p>
    </div>
</template>



<style scoped>
.blog-entry {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background: #fff;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    height: 90vh;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.blog-image {
    width: 20%;
    object-fit: cover;
    border-radius: 8px;
}

.blog-title {
    font-size: 2rem;
    margin-top: 20px;
    color: #333;
}

.blog-subtitle {
    font-size: 1.5rem;
    margin-top: 10px;
    color: #555;
}

.blog-content {
    margin-top: 20px;
    font-size: 1rem;
    color: #666;
}

.blog-dates {
    margin-top: 30px;
    font-size: 0.875rem;
    color: #888;
}

</style>
