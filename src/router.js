import { createRouter, createWebHistory } from 'vue-router'
import HomeComp from './pages/HomeComp.vue'
import IndexUsers from './pages/users/UsersComp.vue'
import TemplateUser from './pages/users/TemplateComp.vue'
import ShowUsers from './pages/users/ShowUser.vue'

import IndexPost from './pages/posts/PostsComp.vue'
import TemplatePost from './pages/posts/PostTemplateComp.vue'

const routes = [
    { path: "/", name: "home", component: HomeComp },
    {
        path: "/users", name: "userTemplate", component: TemplateUser, children: [
            { path: "", name: "users", component: IndexUsers },
            { path: ":id", name: "userId", component: ShowUsers }
        ]
    },
    {
        path: "/posts", name: "postTemplate", component: TemplatePost, children: [
            { path: "", name: "posts", component: IndexPost },
            // { path: ":id", name: "postId", component: ShowPost }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;