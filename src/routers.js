import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/home'
import About from './views/about'
import Introduct from './views/introduct'


Vue.use(VueRouter)
export const router = new VueRouter({
    mode: 'history',
    routes : [
        { path:'/', component:Home},
        { path:'/fourm', component: Introduct },
        { path:'/about', component: About }
    ]
})