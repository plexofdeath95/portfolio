<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
 name: 'ItemLinkComponent',
 props: {
  link: {
   type: String,
   required: true
  },
  text: {
   type: String,
   required: true
  },
  selected: {
   type: Boolean,
   default: false
  }
 },
 setup(props) {
  const router = useRouter()
  const onClickRouteTo = () => {
    router.push(props.link)
  }
  return {
   onClickRouteTo
  }
 }
})
</script>


<template>
    <div :class="{ 'itemLink': true, 'selected': selected }" @click="onClickRouteTo">
        <router-link :to="link">
            {{ text }}
        </router-link>
    </div>
</template>


<style scoped>
.itemLink {
    box-sizing: border-box;
    padding: 0 10px;
    width:100%;
    height:100%;
    border-left: 1px solid var(--border-color);
    margin: auto auto;
    justify-content: left;
    display:flex;
}

.itemLink:hover {
    cursor: pointer;
    border-bottom: 3px solid var(--button-bg); 
}

.itemLink:hover a {
    color: var(--white); 
}

.itemLink a {
    color: var(--secondary-text);
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 1px;
    transition: all 0.3s ease;
    margin: auto auto;
}

.itemLink.selected {
    border-bottom: 3px solid var(--button-bg);
}

.itemLink.selected a {
    color: var(--white); /* using white variable instead of #fff */
}
</style>

