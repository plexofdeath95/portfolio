import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactMe from '../views/ContactMe.vue'
import ProjectsView from '../views/ProjectsView.vue'
import AuthView from '../views/AuthView.vue'
import BlogView from '../views/BlogView.vue'
import ResumeView from '../views/ResumeView.vue'
import CreateBlog from '../views/CreateBlog.vue'
import BlogEntryView from '../views/BlogEntryView.vue'
import EditBlog from '../views/EditBlog.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactMe
    },
    {
      path: '/projects',
      name: 'Projects',
      component: ProjectsView
    },
    {
      path: '/auth',
      name: 'Auth',
      component: AuthView
    },
    {
      path: '/blogs',
      name: 'Blogs',
      component: BlogView
    },
    {
      path: '/blogs/create',
      name: 'CreateBlog',
      component: CreateBlog
    },
    {
      path: '/blogs/:id',
      name: 'BlogEntry',
      component: BlogEntryView
    },
    {
      path: '/blogs/:id/edit',
      name: 'EditBlog',
      component: EditBlog
    },
    {
      path: '/resume',
      name: 'Resume',
      component: ResumeView
    }
  ]
})

export default router
