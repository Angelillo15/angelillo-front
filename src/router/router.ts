import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "Home",
        component: () => import("../views/Home.vue")
    },
    {
        path: "/resources",
        name: "Resources",
        component: () => import("../views/Resources.vue")
    },
    {
        path: "/zat/editor",
        name: "ZatEditor with no id",
        redirect: "/zat/editor/new"
    },
    {
        path: "/zat/editor/:id",
        name: "ZatEditor",
        component: () => import("../views/Editor.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;