import Vue from 'vue'
import Router from 'vue-router'
import home from '@/service/home'
import articleDetail from '@/service/articleDetail'
import articleList from '@/service/articleList'
import board from '@/service/board'

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
        ,
        {
            path:'/articleList',
            name:'articleList',
            component:articleList
        }
        ,
        {
            path:'/board',
            name:'board',
            component:board
        }
    ]
})