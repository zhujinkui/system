import {createRouter, createWebHistory} from "vue-router";

import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Login from "@/views/Login.vue";

//配置路由
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Home},
        {path: '/about', component: About},
        {path: '/login', component: Login},
    ],
})

export default router