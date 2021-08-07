import { createRouter, createWebHashHistory } from "vue-router"

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/login',
            name: "Login",
            component: () => import('@/layout/login.vue'),
            meta: {
                layout: 'login',
                title: '登录'
            }
        },
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
                title: '概览'
            }
        },
        {
            path: '/server',
            name: 'Server',
            component: () => import('@/views/Server.vue'),
            meta: {
                title: '服务器'
            }
        },
        {
            path: '/plugins',
            name: 'Plugins',
            component: () => import('@/views/Plugins.vue'),
            meta: {
                title: '插件市场'
            }
        },
        {
            path: '/settings',
            name: 'Settings',
            component: () => import('@/views/Settings.vue'),
            meta: {
                title: '全局设置'
            }
        },
        {
            path: '/account',
            name: 'Account',
            component: () => import('@/views/Account.vue'),
            meta: {
                title: '个人档案'
            }
        }
    ]
})

router.beforeEach((to, from, next) => {
    next()
})

export default router;