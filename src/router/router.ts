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
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;