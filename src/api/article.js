import Axios from 'axios'
import {develop,baseUrl} from '../config'
export default {

    getArticleSort:function(){
        return new Promise(function(resolve,reject){
            Axios({
                url:baseUrl + '/article/getArticleSort',
                method:'get',
                params:'',
            }).then(function(res){
                resolve(res.data)
            }).catch(function(error){
                reject('error')
            })
        })
    },

    getArticleDetail:function(articleId){
        return new Promise(function(resolve,reject){
            Axios({
                url:baseUrl + '/article/getArticleDetail',
                method:'get',
                params:{id:articleId},
            }).then(function(res){
                resolve(res.data)
            }).catch(function(error){
                reject('error')
            })
        })
    },
    
    getArticleList:function(data){
        return new Promise(function(resolve,reject){
            Axios({
                url:baseUrl + '/article/getArticleList',
                method:'get',
                params:data,
            }).then(function(res){
                resolve(res.data)
            }).catch(function(error){
                reject('error')
            })
        })
    },
}