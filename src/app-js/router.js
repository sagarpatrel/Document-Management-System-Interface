import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: () => import("@/layout/AuthLayout.vue"),

        children: [
            {
                path: '',
                name: 'login',
                meta: { requiresAuth: false, title: "Login", show_back_btn: false },
                component: () => import("@/views/Login.vue"),
            },
            // {
            //     beforeEnter: (to, from, next) => {
            //         guard(to, from, next)
            //     },
            //     path: 'register',
            //     name: 'register',
            //     meta: { requiresAuth: true, title: "register", show_back_btn: false },
            //     component: () => import('@/views/auth/register/addProfile.vue')
            // },
            // {
            //     beforeEnter: (to, from, next) => {
            //         guard(to, from, next)
            //     },
            //     path: 'register/details',
            //     name: 'view-profile',
            //     meta: { requiresAuth: true, title: "viewProfile" },
            //     component: () => import('@/views/auth/register/viewProfile.vue')
            // },
        ]
    },
    // {
    //     path: '/',
    //     name: 'home',
    //     component: () => import("@/components/layouts/Base.vue"),
    //     beforeEnter: (to, from, next) => {
    //         guard(to, from, next)
    //     },
    //     children: [
    //         {
    //             path: 'dashboard',
    //             name: 'dashboard',
    //             meta: { requiresAuth: true, title: "dashboard" },
    //             component: () => import('@/views/dashbaord/dashboard.vue')
    //         },
    //         {
    //             path: 'product',
    //             name: 'product',
    //             meta: { requiresAuth: true, title: "product" },
    //             component: () => import('@/views/products/index.vue')
    //         },
    //         {
    //             path: 'product/details',
    //             name: 'add-product',
    //             meta: { requiresAuth: true, title: "addproduct" },
    //             component: () => import('@/views/products/AddProduct.vue')
    //         },

    //         {
    //             path: 'orders',
    //             name: 'orders',
    //             meta: { requiresAuth: true, title: "orders" },
    //             component: () => import('@/views/orders/order.vue')
    //         },
    //         {
    //             path: 'returns',
    //             name: 'returns',
    //             meta: { requiresAuth: true, title: "returns" },
    //             component: () => import('@/views/returns/return.vue')
    //         },
    //         {
    //             path: 'accounts',
    //             name: 'accounts',
    //             meta: { requiresAuth: true, title: "accounts" },
    //             component: () => import('@/views/accounts/account.vue')
    //         },
    //     ]
    // }
];

// const guard = function (to, from, next) {
//     if (sessionStorage.getItem('token')) {
//         next()
//     }
//     else if ((sessionStorage.getItem('token') == "") && next('/')) {
//         next('/')
//     }

//     else {
//         next('/')
//     }
// }

const router = new VueRouter({
    routes,
    mode: 'history',
})

export default router