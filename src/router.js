import { createRouter, createWebHistory } from 'vue-router'
import HomeComp from './pages/HomeComp.vue'
import IndexUsers from './pages/users/UsersComp.vue'

const routes = [
    { path: "/", name: "home", component: HomeComp },
    { path: "/users", name: "users", component: IndexUsers }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;