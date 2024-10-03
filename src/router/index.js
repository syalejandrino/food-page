import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import RecipePage from '../views/RecipePage.vue'
import CookingNotesPage from '../views/CookingNotesPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/recipes',
      name: 'RecipePage',
      component: RecipePage
    },
    {
      path: '/cooking-notes',
      name: 'CookingNotesPage',
      component: CookingNotesPage
    },
    {
      path: '/about',
      name: 'AboutView',
      component: AboutView
    }
  ]
})

export default router
