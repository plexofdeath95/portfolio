<template>
  <div class="blog-card">
    <div v-if="admin" class="control-buttons">
      <button @click="confirmDelete" class="control-button">
        <span class="material-icons">delete</span>
      </button>
      <button @click="editPost" class="control-button">
        <span class="material-icons">edit</span>
      </button>

      <div v-if="showModal" class="modal">
        <div class="modal-content">
          <label for="confirmation"
            >Enter the blog title <em>{{ blog.title }}</em> to confirm:</label
          >
          <input v-model="confirmation" id="confirmation" type="text" />
          <button
            @click="deletePost"
            :disabled="confirmation.trim() !== blog.title.trim()"
            class="confirm-delete-button"
          >
            Confirm Delete
          </button>

          <button @click="cancelDelete">Cancel</button>
        </div>
      </div>
    </div>
    <div @click="goToBlog" class="blog-item">
      <img :src="blog.imageURL" class="blog-image" />
    <h2 class="blog-title">{{ blog.title }}</h2>
    <h3 class="blog-subtitle">{{ blog.subtitle }}</h3>
    <div class="blog-dates">
      <p><strong>Created:</strong> {{ formatDate(blog.dateCreated) }}</p>
      <p><strong>Modified:</strong> {{ formatDate(blog.dateModified) }}</p>
    </div>
    </div>
   
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import type { BlogsSchema } from '@/composables/firebaseComposables/Firestore/BlogSchema/BlogsSchema' // Replace with actual import
import { deleteBlog } from '@/composables/firebaseComposables/Firestore/BlogSchema/BlogOps'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'BlogCard',
  props: {
    blog: {
      type: Object as () => BlogsSchema,
      required: true
    },
    admin: {
      type: Boolean,
      default: false
    }
  },
  emits: ['delete-blog'],

  setup(props, {emit}) {
    const showModal = ref(false)
    const confirmation = ref('')
    const router = useRouter()
    const formatDate = (timestamp: any) => {

      const date = timestamp.toDate()
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }

    const confirmDelete = () => {
      showModal.value = true
    }

    const deletePost = async() => {
      if (confirmation.value === props.blog.title) {
        console.log('Deleted')
        showModal.value = false
        await deleteBlog(props.blog.id);
        emit('delete-blog');
        
      }
    }

    const editPost = () => {
      router.push(`/blogs/${props.blog.id}/edit`)
    }

    const cancelDelete = () => {
      showModal.value = false
      confirmation.value = '' // Clear the input
    }

    const goToBlog = () => {
      router.push(`/blogs/${props.blog.id}`)
    }

    return {
      formatDate,
      confirmDelete,
      editPost,
      deletePost,
      cancelDelete,
      goToBlog,
      confirmation,
      showModal
    }
  }
})
</script>

<style scoped>
.blog-card {
  background: #fff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  flex-direction: column;
}

.blog-item {
  cursor: pointer;
  margin: 40px;
}

.blog-image {
  width: 20%;
  object-fit: cover;
  border-radius: 8px;
}

.blog-title {
  font-size: 1.5rem;
  margin-top: 10px;
}

.blog-subtitle {
  color: #555;
  margin-top: 5px;
}

.blog-content {
  margin-top: 10px;
  text-align: justify;
}

.blog-dates {
  margin-top: 10px;
  font-size: 0.8rem;
  color: #888;
}

.control-buttons {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 8px; /* Adjust the gap between buttons */
}

.control-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #333; /* Adjust the color */
  font-size: 18px; /* Adjust the font size */
}

.control-button:hover {
  color: #ff0000; /* Adjust hover color */
}

.confirm-delete-button:disabled {
  background-color: #ddd;
  color: #aaa;
  cursor: not-allowed;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000; /* Ensure modal appears above other elements */
}

.modal-content {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  z-index: 1001; /* Ensure modal content appears above the modal background */
}


@media (max-width: 767px) {

  .blog-card {
    padding: 10px; /* Reduced padding */
  }
  
  .blog-title {
    font-size: 1.2rem; /* Reduced font size */
  }
  
  .blog-subtitle {
    font-size: 0.8rem; /* Reduced font size */
  }
  
  .blog-content {
    font-size: 0.8rem; /* Reduced font size */
  }
  
  .blog-dates {
    font-size: 0.7rem; /* Reduced font size */
  }

  .control-buttons {
    top: 5px; /* Adjusted positioning */
    right: 5px;
  }

  .control-button {
    font-size: 16px; /* Reduced icon size */
  }

  .modal-content {
    width: 80%; /* Adjusted modal width */
    padding: 15px; /* Adjusted padding */
  }
}
</style>

