import Axios from 'axios'
import {develop,baseUrl} from '../config'
export default {

    getBoard:function(){
        return new Promise(function(resolve,reject){
            Axios({
                url:baseUrl + '/board/getBoard',
                method:'get',
                params:'',
            }).then(function(res){
                resolve(res.data)
            }).catch(function(error){
                reject('error')
            })
        })
    },

    saveBoard:function(d){
        return new Promise(function(resolve,reject){
            Axios({
                url:baseUrl + '/board/saveBoard',
                method:'post',
                data:d,
            }).then(function(res){
                resolve(res.data)
            }).catch(function(error){
                reject('error')
            })
        })
    }
    

}