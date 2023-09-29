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
    border-left: 1px solid #1E2D3D;
    margin: auto auto;
    justify-content: left;
    display:flex;
}

.itemLink:hover {
    cursor: pointer;
    border-bottom: 3px solid #FEA55F;
}

.itemLink:hover a {
    color: #fff; /* Or the color you prefer when hovered */
}

.itemLink a {
    color: #607B96;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 1px;
    transition: all 0.3s ease;
    margin: auto auto;
}

.itemLink.selected {
    border-bottom: 3px solid #FEA55F;
}

.itemLink.selected a {
    color: #fff;
}

</style>
