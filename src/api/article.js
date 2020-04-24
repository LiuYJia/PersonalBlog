import Axios from 'axios'
import {develop,baseUrl} from '../config'
export default {

    getArticleDetail:function(){
        return new Promise(function(resolve,reject){
            Axios({
                url:baseUrl + '/article/getArticleDetail',
                method:'get',
                params:'',
            }).then(function(res){
                resolve(res.data)
            }).catch(function(error){
                reject('error')
            })
        })
    },
    

}