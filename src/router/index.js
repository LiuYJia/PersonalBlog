import Vue from 'vue'
import Router from 'vue-router'
import home from '@/service/home'
import articleDetail from '@/service/articleDetail'
Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            name:'home',
            component:home
        },
        {
            path:'/articleDetail',
            name:'articleDetail',
            component:articleDetail
        }
    ]
})