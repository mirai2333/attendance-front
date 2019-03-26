import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Success from './views/Success.vue';
import BeiJing from './views/results/BeiJing'

Vue.use(Router);

export default new Router({
    routes: [
        {path: '/', name: 'root', redirect: '/home'},
        {path: '/home', name: 'home', component: Home},
        {path: '/success', name: 'success', component: Success},
        {path: '/beijing', name: 'BeiJing', component: BeiJing}
    ]
})
