import {createRouter, createWebHistory} from "vue-router";
import Main from "@/pages/Main.vue";
import Posts from "@/pages/Posts.vue";
import Post from "@/pages/Post.vue";
import About from "@/pages/About.vue";
import PostsWithStore from "@/pages/PostsWithStore.vue";

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
    {
        path: '/store-posts',
        component: PostsWithStore,
    },
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export {router};