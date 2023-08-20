import "bootstrap/dist/css/bootstrap.min.css";
import '@/assets/main.scss'
// import "bootstrap";

import { createApp } from 'vue'
import App from './App.vue'

import router from './router.js'
import store from "./store/index.js";

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
