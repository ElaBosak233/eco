import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {
        path: '/',
        name: 'Index',
        component: () => import('@/views/Index.vue'),
        meta: {
            title: '门户'
        }
    },
    {
        path: '/dashboard',
        name: 'DashBoard',
        component: () => import('@/views/DashBoard.vue'),
        meta: {
            title: '控制台'
        }
    },
    {
        path: '/login',
        name: "Login",
        component: () => import('@/layout/login.vue'),
        meta: {
            layout: 'login',
            title: '登录'
        }
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    next()
})

export default router;