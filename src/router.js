import Vue from 'vue';
import Router from 'vue-router';
import Index from './components/index.vue';
import Create from './components/create.vue';
import Detail from './components/detail.vue';
import Edit from './components/edit.vue';

Vue.use(Router);

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
});