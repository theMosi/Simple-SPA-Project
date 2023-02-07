import { createRouter, createWebHistory } from 'vue-router'
import HomeComp from './pages/HomeComp.vue'
import IndexUsers from './pages/users/UsersComp.vue'
import TemplateUsers from './pages/users/TemplateComp.vue'
import ShowUser from './pages/users/ShowUser.vue'

const routes = [
    { path: "/", name: "home", component: HomeComp },
    {
        path: "/users", name: "users", component: TemplateUsers, children: [
            { path: "", name: "users", component: IndexUsers },
            { path: ":id", name: "userId", component: ShowUser }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;