import { createRouter, createWebHistory } from 'vue-router';
import HomeComp from './pages/HomeComp.vue';

const routes = [
    { path: "/", name: "home", component: HomeComp }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;