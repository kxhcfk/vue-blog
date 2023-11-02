import Main from "@/pages/Main.vue";
import About from "@/pages/About.vue";
import Posts from "@/pages/Posts.vue";
import {createRouter, createWebHistory} from "vue-router";

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
        path: '/about',
        component: About,
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export {router};