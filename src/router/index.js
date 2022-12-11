import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () =>
            import ("@/components/Home.vue")
    },
    {
        path: "/success",
        name: "Success",
        component: () =>
            import ("@/components/Success.vue")
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router