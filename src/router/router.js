import Main from "@/pages/Main.vue";
import About from "@/pages/About.vue";
import Posts from "@/pages/Posts.vue";
import {createRouter, createWebHistory} from "vue-router";
import Post from "@/pages/Post.vue";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: Posts,
    },
    {
        path: '/posts/:id',
        component: Post,
    },
    {
        path: '/about',
        component: About,
    },
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export {router};