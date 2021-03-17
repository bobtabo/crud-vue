import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index.vue'
import Create from './views/create.vue'
import Detail from './views/detail.vue'
import Edit from './views/edit.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index,
        },
        {
            path: '/create',
            name: 'create',
            component: Create,
        },
        {
            path: '/detail/:id',
            name: 'detail',
            component: Detail,
        },
        {
            path: '/edit/:id',
            name: 'edit',
            component: Edit,
        },
    ],
})