import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Success from './views/Success.vue';
import BeiJing from './views/results/BeiJing';
import ShangHai from './views/results/ShangHai';
import TianJin from './views/results/TianJin';
import HangZhou from './views/results/HangZhou';


Vue.use(Router);

export default new Router({
    routes: [
        {path: '/', name: 'root', redirect: '/home'},
        {path: '/home', name: 'home', component: Home},
        {path: '/success', name: 'success', component: Success},
        {path: '/beijing', name: 'BeiJing', component: BeiJing},
        {path: '/shanghai', name: 'ShangHai', component: ShangHai},
        {path: '/tianjin', name: 'TianJin', component: TianJin},
        {path: '/hangzhou', name: 'HangZhou', component: HangZhou},
    ]
})
