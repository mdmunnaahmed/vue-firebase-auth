import { createRouter, createWebHistory } from "vue-router";
import LogIn from './pages/LogIn.vue'
import SignUp from '@/pages/SignUp'
import HomePage from '@/pages/HomePage'
import NotFound from '@/components/NotFound'
import UserDashboard from '@/pages/UserDashboard'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/login',
      component: LogIn
    },
    {
      path: '/register',
      component: SignUp
    },
    {
      path: '/dashboard',
      component: UserDashboard
    },
    {
      path: '/:NotFound(.*)',
      component: NotFound
    }
  ]
})

export default router