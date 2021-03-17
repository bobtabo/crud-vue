import Vue from 'vue'
import Router from 'vue-router'
import home from './views/index.vue'
import create from './views/create.vue'
import detail from './views/detail.vue'
import edit from './views/edit.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: home,
        },
        {
            path: '/create',
            alias: '/create',
            name: 'create',
            component: create,
        },
        {
            path: '/detail/:param1',
            name: 'detail',
            component: detail,
            props: {
                prop1: 111,
            },
        },
        {
            path: '/edit/:param1',
            name: 'edit',
            component: edit,
            props: {
                prop1: 111,
            },
        },
    ],
})