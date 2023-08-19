import { createRouter, createWebHistory } from "vue-router";
import LogIn from './components/LogIn.vue'
import SignUp from '@/components/SignUp'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: LogIn
    },
    {
      path: '/register',
      component: SignUp
    }
  ]
})

export default router