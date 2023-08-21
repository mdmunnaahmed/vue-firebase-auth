import { createRouter, createWebHistory } from "vue-router";
import LogIn from "./pages/LogIn.vue";
import SignUp from "@/pages/SignUp";
import HomePage from "@/pages/HomePage";
import NotFound from "@/components/NotFound";
import UserDashboard from "@/pages/UserDashboard";
import AddItem from '@/pages/AddItem'

import store from "./store/index.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/additem",
      component: AddItem,
    },
    {
      path: "/login",
      component: LogIn,
      meta: {
        needUnAuth: true,
      },
    },
    {
      path: "/register",
      component: SignUp,
      meta: {
        needUnAuth: true,
      },
    },
    {
      path: "/dashboard",
      component: UserDashboard,
      meta: {
        needAuth: true,
      },
    },
    {
      path: "/:NotFound(.*)",
      component: NotFound,
    },
  ],
});

router.beforeEach((to, _, next) => {
  if (to.meta.needAuth && !store.getters.isAuth) {
    next("/login");
  } else if (to.meta.needUnAuth && store.getters.isAuth) {
    next("/");
  } else {
    next();
  }
});

export default router;
