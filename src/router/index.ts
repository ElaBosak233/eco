import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {
        path: '/',
        name: 'Index',
        component: () => import('@/views/Index.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// router.beforeEach((to, from, next) => {
// 	next()
// })

export default router;