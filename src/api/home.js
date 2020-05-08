import Axios from 'axios'
import {develop,baseUrl} from '../config'
export default {
    addHistoryAccess:function(date){
        return new Promise(function(resolve,reject){
            Axios({
                url:baseUrl + '/homeMsg/addHistoryAccess',
                method:'get',
                params:date,
            }).then(function(res){
                resolve(res.data)
            }).catch(function(error){
                reject('error')
            })
        })
    },

    getOneMsg:function(){
        return new Promise(function(resolve,reject){
            Axios({
                url:baseUrl + '/homeMsg/getOneMsg',
                method:'get',
                params:'',
            }).then(function(res){
                resolve(res.data)
            }).catch(function(error){
                reject('error')
            })
        })
    },
    
    getPersonMsg:function(){
        return new Promise(function(resolve,reject){
            Axios({
                url:baseUrl + '/homeMsg/getPersonMsg',
                method:'get',
                params:'',
            }).then(function(res){
                resolve(res.data)
            }).catch(function(error){
                reject('error')
            })
        })
    },

    getRecentArticle:function(){
        return new Promise(function(resolve,reject){
            Axios({
                url:baseUrl + '/homeMsg/getRecentArticle',
                method:'get',
                params:'',
            }).then(function(res){
                resolve(res.data)
            }).catch(function(error){
                reject('error')
            })
        })
    }

}