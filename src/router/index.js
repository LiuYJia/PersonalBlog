import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            name:'home',
            component:resolve=>require(['@/service/home'],resolve)
        },
        {
            path:'/articleDetailFront',
            name:'articleDetail',
            component:resolve=>require(['@/service/articleDetail'],resolve)
        }
        ,
        {
            path:'/articleListFront',
            name:'articleList',
            component:resolve=>require(['@/service/articleList'],resolve)
        }
        ,
        {
            path:'/boardFront',
            name:'board',
            component:resolve=>require(['@/service/board'],resolve)
        }
    ]
})